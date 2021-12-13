import { SetStateAction } from "react";

export interface IAction {
  type: string
  payload: any
}

export interface IState {
  data: String[]
}

export interface INavButtonProps {
  redirect: string
  pageTitle: string
}

export interface ITeam {
  team_id: number
  players: string
  player1_email: string
  player2_email: string
}

export interface ICalendar {
  entry_date: string
  restrictions: string
  matches: string[]
  day_of_month: number
}

export interface INewEntryClick {
  toggleOff: any,
  toggle: boolean,
  entry_date: string
}