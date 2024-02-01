import { Routes, Route, Navigate } from "react-router-dom"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<div>teste</div>} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}
