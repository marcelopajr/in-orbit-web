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
export function CreateGoal() {
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

        <form action="" className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">What is the activity?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Exercising, meditating, etc..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="desiredWeeklyFrequency">
                How many times a week?
              </Label>
              <RadioGroup>
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    1 time a week
                  </span>
                  <span className="text-lg leading-none">🥱</span>
                </RadioGroupItem>

                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    2 times a week
                  </span>
                  <span className="text-lg leading-none">🥱</span>
                </RadioGroupItem>

                <RadioGroupItem value="3">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    3 times a week
                  </span>
                  <span className="text-lg leading-none">🥱</span>
                </RadioGroupItem>
              </RadioGroup>
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
