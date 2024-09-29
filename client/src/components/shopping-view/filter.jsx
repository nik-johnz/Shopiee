import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { SlidersHorizontal } from "lucide-react";
import { Separator } from "../ui/separator";

function ProductFilter({ filters, handleFilter }) {
    return (
        <div className="bg-background rounded-lg shadow-sm">
            <div className="flex gap-3 p-4 border-b">
                <SlidersHorizontal className="w-5 h-5 mt-2" />
                <h2 className="text-2xl font-bold">Filters</h2>
            </div>
            <div className="p-4 space-y-4">
                {Object.keys(filterOptions).map((keyItem) => (
                    <Fragment key={keyItem}>
                        <div>
                            <h3 className="text-base font-bold">{keyItem}</h3>
                            <div className="grid gap-2 mt-2">
                                {filterOptions[keyItem].map((option) => (
                                    <Label key={option.id} className="flex items-center gap-2 cursor-pointer">
                                        <Checkbox
                                            checked={filters?.[keyItem]?.includes(option.id) || false}
                                            onCheckedChange={() => handleFilter(keyItem, option.id)}
                                        />
                                        {option.label}
                                    </Label>
                                ))}
                            </div>
                        </div>
                        <Separator />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default ProductFilter;
