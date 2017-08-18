class FilterData {
    public readonly sortingProperty: string;
    public readonly searchText: string;
    public readonly pageNumber: number;
    public readonly itemsQuantity: number;

    constructor(sortingColumn: string, searchText: string, pageNumber: number, itemsQuantity: number) {
        this.sortingProperty = sortingColumn;
        this.searchText = searchText;
        this.pageNumber = pageNumber;
        this.itemsQuantity = itemsQuantity;
    }
}

export default FilterData;
