"use server";

import { z } from "zod";
import { randomUUID } from 'crypto'

import Commands from "./commands.json";
import { ActionCode } from "./action-codes";

const terminalSchema = z.object({
    cmd: z.string().min(1).max(128),
});

interface Command {
    cmd: string;
    value: string;
    description: string;
    actionCode: ActionCode;
}

export interface CommandAction {
    id: string;
    input: string;
    output: string;
    actionCode: ActionCode;
}

interface TerminalState {
    payload?: CommandAction
}

async function callCommand(id: string, input: string) {
    
    // Get command
    const commands = (Commands as [Command]);
    const command = commands.find(({cmd}: Command) => cmd === input);

    // -> Command not found
    if (!command) {
        return {
            payload: {id, input, output: `${input}: command not found. Type 'help' for list of commands.`, actionCode: ActionCode.NOOP}
        }
    }

    // -> Command found 
    return {
        payload: {
            id, input, output: command!.value, actionCode: command!.actionCode
        } 
    }
}

export async function terminalState(formState: TerminalState, formData: FormData): Promise<TerminalState> {
    const result = terminalSchema.safeParse({
        cmd: formData.get("cmd"),
    });
    
    const input = formData.get("cmd")?.toString() ?? "";
    const id = randomUUID();

    // Input error -> return blank output
    if(!result.success) {
        return {payload: {id, input, output: "", actionCode: ActionCode.ERROR}};
    }

    return callCommand(id, input);
}
