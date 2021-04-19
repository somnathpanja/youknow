export class ListItem {
  name: string;
  value: string;
  selected: boolean;
  constructor(name: string, value: string, selected: boolean = false) {
    this.name = name;
    this.value = value;
    this.selected = selected;
  }
}