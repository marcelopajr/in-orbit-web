import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from './ui/button';
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '../components/ui/radio-group';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../components/ui/dialog';
import { useQueryClient } from '@tanstack/react-query';
import { createGoal } from '../http/create-goal';

const createGoalSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  desiredWeeklyFrequency: z.coerce
    .number()
    .min(1, { message: 'Frequency is required' })
    .max(7, { message: 'Maximum frequency is 7' }),
});

type CreateGoalSchema = z.infer<typeof createGoalSchema>;

export function CreateGoal() {
  const queryClient = useQueryClient();
  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalSchema>({
      resolver: zodResolver(createGoalSchema),
    });

  async function handleCreateGoal({
    title,
    desiredWeeklyFrequency,
  }: CreateGoalSchema) {
    await createGoal({ title, desiredWeeklyFrequency });

    queryClient.invalidateQueries({ queryKey: ['summary'] });
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] });

    reset();
  }

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Register a goal</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Add activities that make you feel good and that you want to continue
            practicing every week.
          </DialogDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">What is the activity?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Exercising, meditating, etc..."
                {...register('title')}
              />

              {formState.errors.title && (
                <span className="text-sm text-red-400">
                  {formState.errors.title.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="desiredWeeklyFrequency">
                How many times a week?
              </Label>

              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={3}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <RadioGroupItem value="1">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          Once a week
                        </span>
                        <span className="text-lg leading-none">🥱</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="2">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          2 times a week
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          3 times a week
                        </span>
                        <span className="text-lg leading-none">😎</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="4">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          4 times a week
                        </span>
                        <span className="text-lg leading-none">😜</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="5">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          5 times a week
                        </span>
                        <span className="text-lg leading-none">🤨</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="6">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          6 times a week
                        </span>
                        <span className="text-lg leading-none">🤯</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="7">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          Every day of the week
                        </span>
                        <span className="text-lg leading-none">🔥</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  );
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button className="flex-1">Register</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}
