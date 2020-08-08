import type {Topology} from 'topojson-specification'

import world50mJSON from './world/50m.json'
export let world50m: Topology = (world50mJSON as any) as Topology

import world110mJSON from './world/110m.json'
export let world110m: Topology = (world110mJSON as any) as Topology
