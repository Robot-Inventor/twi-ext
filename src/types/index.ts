export interface TwiExtPollData {
    isFinal: boolean;
    totalVotes: number;
    choices: {
        label: string;
        count: number;
    }[];
}
