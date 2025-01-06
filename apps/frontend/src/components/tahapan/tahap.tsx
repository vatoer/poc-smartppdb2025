import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

interface TahapProps {
  tahap: number;
  judul: string;
  teks: string;
  buttonLabel?: string;
  className?: string;
  isDone?: boolean;
  isCurrent?: boolean;
  enabled?: boolean;
  linkTo?: string;
}

export const Tahap = ({
  tahap,
  judul,
  teks,
  buttonLabel,
  className,
  isDone,
  isCurrent,
  enabled,
  linkTo,
}: TahapProps) => {
  return (
    <div
      className={cn("flex flex-col items-center p-1", className && className)}
    >
      <div
        id={`step-${tahap}-circle`}
        className={`
        
        w-16 h-16 flex items-center justify-center rounded-full border-4 border-blue-500 bg-blue-100 text-blue-500 font-semibold relative -bottom-16 -mt-16`}
      >
        {isDone ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          tahap
        )}
      </div>
      <div
        id={`step-${tahap}-content`}
        className="mt-8 text-center bg-blue-100 border-blue-500 border-2 rounded-lg pt-8 p-2 w-full flex-grow flex flex-col"
      >
        <h3 className="text-xl font-semibold">{judul}</h3>
        <p className="hidden sm:block text-gray-600 flex-grow">{teks}</p>
        {!isDone && enabled && (
          <Link href={linkTo || "#"}>
            <Button size="sm" className="w-full mt-auto">
              {buttonLabel || judul}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
