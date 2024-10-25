import { component$ } from "@builder.io/qwik";

export interface StepperStep {
  title: string;
  description: string;
}

export interface StepperProps {
  steps: StepperStep[];
}

export const Stepper = component$<StepperProps>(({ steps }) => {
  return (
    <ul class="relative flex flex-col md:flex-row gap-2">
      {steps.map((step, index) => (
        <li key={index} class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
          <div class="min-w-8 min-h-8 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span class="size-8 flex justify-center items-center shrink-0 bg-neutral font-light text-base-100 rounded-full dark:bg-neutral-dark dark:text-white text-base">
              {index + 1}
            </span>
            <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-neutral-dark group-last:hidden dark:bg-neutral-700"></div>
          </div>
          <div class="grow md:grow-0 md:mt-3 pb-5">
            <span class="block text-xl font-bold font-playfair text-secondary dark:text-white mb-2">
              {step.title}
            </span>
            <p class="text-base font-opensans text-gray-700 dark:text-neutral-500">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
});
