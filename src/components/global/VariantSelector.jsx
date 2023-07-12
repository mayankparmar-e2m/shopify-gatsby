import React, { useState } from "react";
export default function VariantSelector({
  product,
  onVariantSelectorChange = undefined,
  selectedFirstOrAvailabeVariant,
}) {
  const { options, variants } = product;
  const [selectedVariant, setSelectedVariant] = useState(
    selectedFirstOrAvailabeVariant
  );
  const [selectedOptions, setSelectedOptions] = useState(
    selectedVariant?.selectedOptions || []
  );
  const handleVariantSelector = (option) => {
    const selectedOption = [...selectedOptions];
    selectedOption[option.index] = { name: option.name, value: option.value };
    setSelectedOptions(selectedOption);
    const updatedVariant = variants.find((variant) => {
      if (
        variant.selectedOptions.every(
          (cv, index) =>
            cv.name === selectedOption[index].name &&
            cv.value === selectedOption[index].value
        )
      ) {
        return true;
      }
      return false;
    });
    setSelectedVariant(updatedVariant);
    if (onVariantSelectorChange) {
      onVariantSelectorChange(updatedVariant);
    }
  };
  return (
    <ul className="product-selector list-none my-3">
      {options.map((option, index) => {
        {
          return (
            <li className="product-option font-semibold text-base" key={index}>
              {option.name}
              <div className="product-option-value">
                <ul className="flex items-center my-3">
                  {option.values.map((value, i) => {
                    return (
                      <li
                        className={`border border-black p-4 mr-2 cursor-pointer ${
                          selectedOptions[index].value === value &&
                          "border border-white bg-slate-300"
                        }`}
                        key={i}
                        onKeyDown={() =>
                          handleVariantSelector({
                            index,
                            value,
                            name: option.name,
                          })
                        }
                        onClick={() =>
                          handleVariantSelector({
                            index,
                            value,
                            name: option.name,
                          })
                        }
                      >
                        {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}
