import { UserLocation } from '../server/mapbox'

export type DestinationSearchEntryType =
    | 'country'
    | 'region'
    | 'postcode'
    | 'district'
    | 'place'
    | 'locality'
    | 'neighborhood'
    | 'address'
    | 'poi'

export interface DestinationSearchEntry {
    displayName: string
    fullName?: string
    position: UserLocation
    relevance: number
    type: DestinationSearchEntryType
}
