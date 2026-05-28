import type { AiWorkflowStep } from './types';

export const aiWorkflowSteps: AiWorkflowStep[] = [
  { id: 'prompt', label: 'Prompt' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'code', label: 'Code' },
  { id: 'review', label: 'Review' },
  { id: 'refactor', label: 'Refactor' },
  { id: 'production', label: 'Production' },
];

export const aiWorkflowDescription =
  'Использую AI-инструменты для ускорения разработки, анализа legacy-кода, генерации MVP, рефакторинга и тестов. При этом всегда проверяю архитектуру, типизацию, безопасность и качество сгенерированного кода.';
