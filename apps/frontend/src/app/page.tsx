import { Button } from "@workspace/ui/components/button"

import { dbSmartppdb}  from '@workspace/database/client'

import { getSiswa } from "@workspace/database/data/siswa"

const d = await getSiswa('1');

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="lg" variant="destructive">Button</Button>
      </div>
    </div>
  )
}
