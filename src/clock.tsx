import { Tile, useHub } from '@mantle/api'

export default function Clock() {
  const { data, error } = useHub<{ state: string }>('clock')
  if (error) return <Tile.Status status="error" label="Hub-Uhr" detail={error.message} />
  return <Tile.Number value={data?.state ?? '–'} label="Hub-Uhr" />
}
