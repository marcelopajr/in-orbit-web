import { CheckCircle2, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';
import { Progress, ProgressIndicator } from './ui/progress-bar';
import { Separator } from './ui/separator';
import { InOrbitIcon } from './in-orbit-icon';
import { OutlineButton } from './ui/outline-button';

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">
          <div className="flex items-center gap-3">
            <InOrbitIcon />
            August 5th to 10th
          </div>
        </span>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Register a goal
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You have completed <span className="text-zinc-100">8</span> of{' '}
            <span className="text-zinc-100">15</span>
          </span>
          <span>50%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" /> Meditate
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" /> Running
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" /> Exercising
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" /> Running
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" /> Meditate
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Your week</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Sunday <span className="text-zinc-400 text-xs">(August 10th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "<span className="text-zinc-100">Running</span>"
                at <span className="text-zinc-100">8:13 AM</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "<span className="text-zinc-100">Meditate</span>"
                at <span className="text-zinc-100">9:11 AM</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Monday <span className="text-zinc-400 text-xs">(August 10th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "<span className="text-zinc-100">Meditate</span>"
                at <span className="text-zinc-100">10:02 AM</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
