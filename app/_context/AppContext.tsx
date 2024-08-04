import React, {createContext,useState,useContext} from "react";

type Flow = {
    flowName:string
    setFlowName:(flowName:string)=>void
    flowDescription:string
    setFlowDescription:(currentFlowDescription:string)=>void
    flowNodes:[]
    setFlowNodes:(flowNodes:[])=>void
    flowEdges:[]
    setFlowEdges:(flowEdges:[])=>void
}
// defining app context type
interface AppContextType {
    isEditorOpen:boolean
    openEditor:() => void
    closeEditor:() => void
    currentFlow:Flow
    setCurrentFlow:(currentflow:Flow)=>void
    userFlows:[Flow],
    addFlow:(flow:Flow) => void
}
