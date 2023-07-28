#include <stdio.h>
#include <stdlib.h>
#include "candles.h"
#include "indicators.h"

#define DATA_MAX 4
#define TASK_MAX 1000

typedef struct {
  int enabled;
  int target_index;
  int is_inputs;
  int data_index;
} InputMap;

typedef struct {
  int size;
  int start_task;
  int indic_index;
  TI_REAL options[DATA_MAX];
  int inputs_offset;
  TI_REAL * inputs[DATA_MAX];
  int outputs_offset;
  TI_REAL * outputs[DATA_MAX];
  InputMap inputs_map[DATA_MAX];
} Task;

int next = 0;
int first_use = 1;
Task tasks[TASK_MAX];

void erase(int task_index, int only_erase) {
  Task * task = &tasks[task_index];
  for (int data_index = 0; data_index < DATA_MAX; ++data_index) {
    if (!only_erase && task->inputs[data_index] != NULL) free(task->inputs[data_index]);
    if (!only_erase && task->outputs[data_index] != NULL) free(task->outputs[data_index]);
    task->inputs[data_index] = task->outputs[data_index] = NULL;
    task->inputs_map[data_index].enabled = 0;
  }
}

void erase_batch(int start_index, int end_index, int only_erase) {
  for (int i = start_index; i <= end_index; ++i) erase(i, only_erase);
}

int push(int indic_index, int size, int start_task) {
  int task_index = next;
  if (first_use) erase_batch(0, TASK_MAX - 1, 1);
  else erase(task_index, 0);
  first_use = 0;
  Task * task = &tasks[task_index];
  task->indic_index = indic_index;
  task->size = size;
  task->start_task = start_task;
  if (!start_task) {
    ti_indicator_info * indic = &ti_indicators[indic_index];
    for (int i = 0; i < indic->outputs; ++i)
      task->outputs[i] = malloc(sizeof(TI_REAL) * size);
  }
  if (++next >= TASK_MAX) next = 0;
  return task_index;
}

void pop() {
  if (--next < 0) next = TASK_MAX - 1;
  erase(next, 0);
}

TI_REAL * inputs(int task_index, int data_index) {
  Task * task = &tasks[task_index];
  if (task->inputs[data_index] == NULL)
    task->inputs[data_index] = malloc(sizeof(TI_REAL) * task->size);
  return task->inputs[data_index];
}

TI_REAL * options(int task_index) {
  return tasks[task_index].options;
}

TI_REAL * outputs(int task_index, int data_index) {
  return tasks[task_index].outputs[data_index];
}

void inputs_map(
  int task_index,
  int input_index,
  int enabled,
  int target_index,
  int is_inputs,
  int data_index
) {
  InputMap * map = &tasks[task_index].inputs_map[input_index];
  map->enabled = enabled;
  map->target_index = target_index;
  map->is_inputs = is_inputs;
  map->data_index = data_index;
}

int inputs_offset(int task_index) {
  return tasks[task_index].inputs_offset;
}

int outputs_offset(int task_index) {
  return tasks[task_index].outputs_offset;
}

void link(int task_index) {
  Task * task = &tasks[task_index];
  ti_indicator_info * indic = &ti_indicators[task->indic_index];
  int inputs_offset = 0;
  for (int i = 0; i < indic->inputs; ++i) {
    InputMap * map = &task->inputs_map[i];
    if (map->enabled) {
      Task * target = &tasks[map->target_index];
      const int offset = map->is_inputs ? target->inputs_offset :
        target->outputs_offset;
      task->inputs[i] = map->is_inputs ? target->inputs[map->data_index] :
        target->outputs[map->data_index];
      if (offset > inputs_offset) inputs_offset = offset;
    }
  }
  task->inputs_offset = inputs_offset;
}

void run(int task_index) {
  Task * task = &tasks[task_index];
  ti_indicator_info * indic = &ti_indicators[task->indic_index];
  link(task_index);
  task->outputs_offset = indic->start(task->options) + task->inputs_offset;
  if (task->start_task) return;
  const TI_REAL * inputs[DATA_MAX];
  TI_REAL * outputs[DATA_MAX];
  for (int i = 0; i < indic->inputs; ++i)
    inputs[i] = &task->inputs[i][task->inputs_offset];
  for (int i = 0; i < indic->outputs; ++i)
    outputs[i] = &task->outputs[i][task->outputs_offset];
  indic->indicator(
    task->size - task->inputs_offset,
    inputs,
    task->options,
    outputs
  );
}

void run_batch(int start_index, int end_index) {
  for (int i = start_index; i <= end_index; ++i) run(i);
}
