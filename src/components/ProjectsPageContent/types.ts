export interface SelectedFilter {
  filter: string
  value: string
}

export interface Filters {
  [key: string]: Set<string>
}

export interface FilterButtonClickEvent {
  target: HTMLButtonElement
}
