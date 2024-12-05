"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidate = void 0;
const bodyValidate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        const valid = error == null;
        if (valid) {
            next();
        }
        else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            console.log("error", message);
            res.status(422).json({ error: message });
        }
    };
};
exports.bodyValidate = bodyValidate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS12YWxpZGF0ZS5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbWlkZGxld2FyZS9ib2R5LXZhbGlkYXRlLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUNuQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztRQUM1QixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksRUFBRSxDQUFDO1NBQ1Y7YUFBTTtZQUNILE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDMUIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUMsQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQWJZLFFBQUEsWUFBWSxnQkFheEIifQ==