"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBookSchema = exports.createBookSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createBookSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
});
exports.returnBookSchema = joi_1.default.object({
    score: joi_1.default.number()
        .min(0)
        .max(10)
        .required()
        .messages({
        'number.base': 'Score must be a number',
        'number.min': 'Score must be greater than or equal to 0',
        'number.max': 'Score must be less than or equal to 10',
        'any.required': 'Score is required',
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zY2hlbWFzL2Jvb2suc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhDQUFzQjtBQUVULFFBQUEsZ0JBQWdCLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUN6QyxJQUFJLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUM5QixDQUFDLENBQUM7QUFHVSxRQUFBLGdCQUFnQixHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDekMsS0FBSyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUU7U0FDaEIsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNOLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDUCxRQUFRLEVBQUU7U0FDVixRQUFRLENBQUM7UUFDUixhQUFhLEVBQUUsd0JBQXdCO1FBQ3ZDLFlBQVksRUFBRSwwQ0FBMEM7UUFDeEQsWUFBWSxFQUFFLHdDQUF3QztRQUN0RCxjQUFjLEVBQUUsbUJBQW1CO0tBQ3BDLENBQUM7Q0FDTCxDQUFDLENBQUMifQ==