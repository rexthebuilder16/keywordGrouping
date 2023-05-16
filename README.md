# keywordGrouping

## Ad Group Keyword Grouping

This script provides a custom function called `GROUP_KEYWORD` specifically designed for Google Sheets. It allows you to group keywords based on their similarity to ad groups. The function utilizes the Levenshtein distance algorithm to calculate the difference between strings and assign each keyword to the ad group with the smallest distance.

### Prerequisites

Before using the `GROUP_KEYWORD` function in Google Sheets, make sure you have the following:

- A Google Sheets document.
- Basic knowledge of working with Google Sheets and custom functions.
- Understanding of JavaScript programming language.

### How to Use

1. Open your Google Sheets document.

2. In the menu bar, click on "Extensions" and then select "Apps Script". This will open the Apps Script editor.

3. In the Apps Script editor, create a new script file or open an existing one.

4. Copy the code of the `GROUP_KEYWORD` and `LEVENSHTEIN` functions into the script file.

5. Save the script file by clicking on the floppy disk icon or pressing `Ctrl + S`.

6. Close the Apps Script editor.

7. Now you can use the `GROUP_KEYWORD` function directly in your Google Sheets document.

8. In a cell where you want the result to appear, enter the following formula:

   ```plaintext
   =GROUP_KEYWORD(keyword, adGroups, allKeywords)
   ```

   Replace `keyword`, `adGroups`, and `allKeywords` with the appropriate values or cell references.

   For example:

   ```plaintext
   =GROUP_KEYWORD(A2, B2:B4, D2:D10)
   ```

   - `A2` contains the keyword to be grouped.
   - `B2:B4` represents the range of ad groups.
   - `D2:D10` represents the range of all keywords.

9. Press Enter to execute the formula. The cell will display the name of the ad group that has the closest match to the keyword.

10. Adjust the `threshold` value in the `GROUP_KEYWORD` function if necessary, based on your requirements.

### Additional Notes

- The code provided is specifically designed for Google Sheets and uses the custom function feature provided by Google Apps Script.

- Ensure that the `LEVENSHTEIN` function is available in the same script file as the `GROUP_KEYWORD` function. The `LEVENSHTEIN` function calculates the Levenshtein distance between two strings and is used internally by the `GROUP_KEYWORD` function.

- Make sure the input arrays (`adGroups` and `allKeywords`) contain the correct data format. Each ad group or keyword should be represented as an array with the respective value at index 0.

- You can modify or extend the code according to your specific requirements. The provided implementation serves as a starting point and can be customized as needed.

- Remember to handle any potential errors or exceptions that may occur during the execution of the code.

### License

This script is provided under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify, distribute, and use it in your Google Sheets documents.
