class FilterResult<TResult> {
    public readonly items: TResult[];
    public readonly itemsQuantity: number;

    constructor(items: TResult[], itemsQuantity: number) {
        this.items = items;
        this.itemsQuantity = itemsQuantity;
    }
}

export default FilterResult;
