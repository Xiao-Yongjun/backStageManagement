import Mock from "mockjs";
import listdata from '../../mockServeData/home'
Mock.mock('/api/home/getData',listdata.getlistdata)