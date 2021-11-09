import axios from "axios";
import { BASE_URL, ID, TOKEN } from "../constants/api";

const headers = {
    headers:{
        Authorization: `Bearer ${TOKEN}`
    }
}

export const getCampeonato = async(setCampeonato: any):Promise<void> =>{
    await axios.get(`${BASE_URL}/campeonatos/${ID}`, headers)
    .then((res)=>{
        setCampeonato(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getTabela = async(setTabela: any):Promise<void> =>{
    await axios.get(`${BASE_URL}/campeonatos/${ID}/tabela`, headers)
    .then((res)=>{ 
        setTabela(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getAllRodadas = async(setRodadas: any):Promise<void> =>{
    await axios.get(`${BASE_URL}/campeonatos/${ID}/rodadas`, headers)
    .then((res)=>{
        setRodadas(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getRodada = async(setRodadas: any, idRodada: number):Promise<void> =>{
    await axios.get(`${BASE_URL}/campeonatos/${ID}/rodadas/${idRodada}`, headers)
    .then((res)=>{
        setRodadas(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getTime = async(setTime: any, idTime: number):Promise<void> =>{
    await axios.get(`${BASE_URL}/times/${ID}`, headers)
    .then((res)=>{
        setTime(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}