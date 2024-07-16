declare module "all_jokes" {
    export type JokesType = "dark" | "limit" | "dev" | "normal" | "beauf" | "blonde" | "chucknorris";

    export interface IJoke {
        id: number;
        type: JokesType;
        joke: string;
        answer: string;
    }

    export default class Jokes {
        public constructor();

        public getRandomJoke(): IJoke;
        public getJokeByType(type: JokesType): IJoke;
        public getJokeById(id: number): IJoke | undefined;
        public getStats(): {
            JokesCount: number;
            DarkJokes: number;
            LimitJokes: number;
            DevJokes: number;
            NormalJokes: number;
            BeaufJokes: number;
            BlondesJokes: number;
        };
        public getHelp(): string;

        private filterJoke(type: string): IJoke[];
    }
}