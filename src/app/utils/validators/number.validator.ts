import { ValidatorFn } from "@angular/forms";

export function numberValidator(): ValidatorFn {
    const pattern = new RegExp(`^[0-9]+$`,'gm');

    return (control) => {
        const value = control.value;
        const isValid = value === '' || pattern.test(value);

        if (isValid) {
            return null;
        }

        return { numberValidator: true };
    }
}