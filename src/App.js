import React, { useReducer, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Profile from "./pages/Profile";
import Enroll from "./pages/Enroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FindEmail from "./pages/FindEmail";
import FindPW from "./pages/FindPW";
import { marketsDummyData } from "./constants/data";

import { AuthProvider } from "./context/AuthProvider";
import MainLayout from "./components/MainLayout";

const reducer = (state, action) => {
    let newState = [];
    switch (action.type) {
        case "INIT": {
            return action.data;
        }
        case "CREATE": {
            newState = [action.data, ...state];
            break;
        }
        case "REMOVE": {
            newState = state.filter((it) => it.id !== action.targetId);
            break;
        }
        case "EDIT": {
            newState = state.map((it) =>
                it.id === action.data.id ? { ...action.data } : it
            );
            break;
        }
        default:
            return state;
    }

    localStorage.setItem("diary", JSON.stringify(newState));
    return newState;
};
export const MarketStateContext = React.createContext();
export const MarketDispatchContext = React.createContext();

function App() {
    const marketList = marketsDummyData;
    const [data, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        dispatch({ type: "INIT", data: marketsDummyData });
    }, []);

    // CREATE
    const onCreate = (date, content, emotion) => {
        dispatch({
            type: "CREATE",
            data: {
                date: new Date(date).getTime(),
                content,
                emotion,
            },
        });
    };
    // REMOVE
    const onRemove = (targetId) => {
        dispatch({ type: "REMOVE", targetId });
    };
    // EDIT
    const onEdit = (targetId, date, content, emotion) => {
        dispatch({
            type: "EDIT",
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotion,
            },
        });
    };

    return (
        <AuthProvider>
            <MarketStateContext.Provider value={data}>
                <MarketDispatchContext.Provider
                    value={{
                        onCreate,
                        onEdit,
                        onRemove,
                    }}
                >
                    <BrowserRouter>
                        {/* <CssBaseline /> */}
                        <div className="App">
                            <MainLayout>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route
                                        path="/mypage"
                                        element={<Profile />}
                                    />
                                    <Route path="/sign" element={<Sign />} />
                                    <Route
                                        path="/enroll"
                                        element={<Enroll />}
                                    />
                                    <Route
                                        path="/findEmail"
                                        element={<FindEmail />}
                                    />
                                    <Route
                                        path="/findPw"
                                        element={<FindPW />}
                                    />
                                </Routes>
                            </MainLayout>
                        </div>
                    </BrowserRouter>
                </MarketDispatchContext.Provider>
            </MarketStateContext.Provider>
        </AuthProvider>
    );
}

export default App;
