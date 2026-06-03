// Import Excel Library
import * as EXCEL from 'xlsx';
import fs from 'fs';
// Define TestData Structure for type safety
interface TestRecord {
    Skill1: string,
    Skill2: string
}

// Create method to read Excel file and return data as TestData array
export function readExcelFile(filePath: string) {
    // Read the excel file as binary string
    //const file = fs.readFileSync(filePath);
    //const workbook = EXCEL.read(file);
    
    // Parse into workbook
    const workbook = EXCEL.readFile(filePath);
    // Get the first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    // Convert sheet to JSON
    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1});
    // Convert raw data to TestRecord
    const records: TestRecord[] =  rawData.slice(1).map((column: any)=>({
        Skill1: column[0],
        Skill2: column[1]
    }));
    return records;
};

// Export the method for use in test files