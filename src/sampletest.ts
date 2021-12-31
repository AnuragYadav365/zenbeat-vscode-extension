import * as vscode from 'vscode';

export async function openDirectory() {
    vscode.commands.executeCommand('workbench.action.files.openFile');
    console.log("Successfully Opened");
}