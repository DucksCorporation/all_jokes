"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jokes_json_1 = __importDefault(require("./jokes.json"));
const jokesType = ["dark", "limit", "dev", "normal", "beauf", "blonde", "chucknorris"];
const UseThisAndYourPCGoesBoom = undefined;
class Jokes {
    constructor() {
        Object.freeze(jokes_json_1.default);
    }
    ;
    getRandomJoke() {
        return jokes_json_1.default[Math.floor(Math.random() * jokes_json_1.default.length)];
    }
    ;
    getJokeByType(type) {
        if (!jokesType.includes(type))
            throw new TypeError("Argument is not valid.");
        const f = this.filterJoke(type);
        return f[Math.floor(Math.random() * f.length)];
    }
    ;
    getJokeById(id) {
        const maxId = jokes_json_1.default.at(-1).id;
        if (isNaN(id))
            throw new TypeError("Argument must be a number.");
        if (!Number.isInteger(id))
            throw new TypeError("Argument must be an integer.");
        if (id <= 0 || id > maxId)
            throw new RangeError(`Argument must be upper than 0 and lower than ${maxId}`); //I know, this is weird but I have ID problem in jokes.json
        return jokes_json_1.default.find(e => e.id === id);
    }
    ;
    getStats() {
        return {
            JokesCount: jokes_json_1.default.length,
            DarkJokes: this.filterJoke("dark").length,
            LimitJokes: this.filterJoke("limit").length,
            DevJokes: this.filterJoke("dev").length,
            NormalJokes: this.filterJoke("normal").length,
            BeaufJokes: this.filterJoke("beauf").length,
            BlondesJokes: this.filterJoke("blonde").length,
            ChuckNorrisJokes: this.filterJoke("chucknorris").length,
        };
    }
    ;
    getHelp() {
        return "https://discord.gg/E5hPRnMUgq";
    }
    ;
    filterJoke(type) {
        if (!jokesType.includes(type))
            throw new TypeError("[Internal Error] argument is not the right type.");
        return jokes_json_1.default.filter(e => e.type === type);
    }
    ;
}
exports.default = Jokes;
;
