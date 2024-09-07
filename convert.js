// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const markHeight = inchToFeet(65);
// console.log(markHeight);

function inchToFeet2(inch2) {
  const feet2 = inch2 / 12;
  const integerNumber = parseInt(feet2);
  const remainingFractionNumber = inch2 % 12;
  const totalHeight = `${integerNumber} ft ${remainingFractionNumber} inch`;
  return totalHeight;
}

const maskHeight = inchToFeet2(64);
// console.log(maskHeight);

// 1 mile = 1.60934 km

function milesToKm(mile) {
  const formula = mile * 1.60934;
  const km = parseInt(formula);
  const miles = parseInt((formula % 1) * 100); // !Explanation
  const mileLabel = miles === 1 ? "mile" : "miles";
  const totalDistance = `${km} km ${miles} ${mileLabel}`;
  return totalDistance;
}

const distance = milesToKm(1);
// console.log(distance);

/**
 * !Explanation:
 * Certainly! Let’s break down the line:

```javascript
const miles = parseInt((formula % 1) * 100);
```

This line is designed to extract the fractional part of the distance in kilometers and convert it into a whole number representing the "miles" portion. Here’s a detailed explanation:

### Step-by-Step Breakdown:

1. **`formula`**: 
   - This is the result of the multiplication `mile * 1.60934`, which gives you the distance in kilometers. For example, if `mile = 12`, then `formula` will be `12 * 1.60934 = 19.31208`.

2. **`formula % 1`**:
   - The `%` operator is the modulus operator. When used with `1`, it extracts the fractional part of a number.
   - `formula % 1` gives us the part after the decimal point. For example:
     - `19.31208 % 1 = 0.31208`.
   - This extracts `0.31208`, which is the fraction of kilometers after 19 km.

3. **`(formula % 1) * 100`**:
   - This multiplies the fractional part by 100 to convert it to a whole number.
   - For example, `0.31208 * 100 = 31.208`.
   - This represents the "miles" portion of the distance (in this case, approximately 31 miles).

4. **`parseInt()`**:
   - `parseInt()` is used to extract the integer part of the result.
   - `parseInt(31.208)` gives us `31`, which represents the "miles" portion of the distance.
   - `parseInt()` truncates any decimal places, ensuring that the miles portion is a whole number.

### Purpose:
This line essentially extracts the fractional kilometers and converts it into a rough equivalent of "miles" for the purpose of your custom format. It turns the kilometers' fractional part into a whole number that we interpret as "miles."

### Example:
For `12 miles`:
- `formula = 12 * 1.60934 = 19.31208 km`
- `formula % 1 = 0.31208` (fractional part of the kilometers)
- `0.31208 * 100 = 31.208` (convert fraction to "miles")
- `parseInt(31.208) = 31` (get the whole number part, which is 31 miles)

Thus, the result becomes `"19 km 31 miles"`.
 */

// gm to kg
// 1000 gm = 1 kg

function gmToKg(gm) {
  const weight = gm / 1000;
  const kg = parseInt(weight);
  const remainingGm = gm % 1000;
  return kg === 0 ? `${remainingGm} gm` : `${kg} kg ${remainingGm} gm`;
}

const argument = gmToKg(1550);
console.log(argument); 
