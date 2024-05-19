import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useRecoilState } from "recoil";
import { userState } from "../recoil";

import useAuth from "../hooks/useAuth";

const Header = () => {
    const { auth } = useAuth();

    // 토큰 가져오기
    const token = localStorage.getItem("token");
    console.log("토큰 확인", token);

    const [isLoggedIn, setIsLoggedIn] = useState(!!token); // 로그인 상태
    const [user, setUser] = useRecoilState(userState);

    // 악기 상태를 위한 핸들러
    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("recoil-persist");
        console.log("토큰 삭제 성공");
    };

    return (
        <>
            {["xxl"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="bg-white"
                    style={{ marginBottom: "0rem" }}
                >
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <svg
                                width="180"
                                height="120"
                                viewBox="0 0 159 58"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ marginLeft: "15px" }}
                            >
                                <path
                                    d="M29.9921 47.94C29.9921 45.98 30.3187 43.46 30.9721 40.38C31.6254 37.3 32.4887 34.01 33.5621 30.51C30.4821 30.7433 27.3787 31.0467 24.2521 31.42C21.1721 31.7933 18.4887 32.0033 16.2021 32.05C14.1021 36.95 12.4221 41.4767 11.1621 45.63C9.94874 49.7367 8.99207 53.75 8.29207 57.67C6.51874 57.25 5.04874 56.5033 3.88207 55.43C2.7154 54.4033 1.64207 53.0967 0.662071 51.51C1.0354 50.7633 1.4554 49.8067 1.92207 48.64C2.4354 47.4733 3.01874 46.0733 3.67207 44.44C4.37207 42.76 5.14207 40.8233 5.98207 38.63C6.86874 36.39 7.87207 33.8 8.99207 30.86C7.45207 30.2067 6.4254 29.2967 5.91207 28.13C6.1454 27.9433 6.65874 27.7567 7.45207 27.57C8.29207 27.3367 9.31874 27.1033 10.5321 26.87L11.4421 24.63C12.4221 22.11 13.2154 19.9867 13.8221 18.26C14.4754 16.5333 15.0121 14.8533 15.4321 13.22C15.8987 11.54 16.3187 9.69666 16.6921 7.69C17.1121 5.68333 17.6021 3.14 18.1621 0.059997C20.1221 0.433331 21.8954 1.29666 23.4821 2.65C25.1154 4.00333 26.5154 5.63666 27.6821 7.55C27.2621 8.11 26.7487 8.95 26.1421 10.07C25.5354 11.19 24.8587 12.5433 24.1121 14.13C23.4121 15.67 22.6421 17.42 21.8021 19.38C20.9621 21.2933 20.0521 23.3233 19.0721 25.47C21.9654 25.0967 24.8821 24.7467 27.8221 24.42C30.8087 24.0933 33.4454 23.86 35.7321 23.72C36.5721 21.2933 37.4354 18.9367 38.3221 16.65C39.2554 14.3167 40.1654 12.1933 41.0521 10.28C41.9387 8.36667 42.7787 6.68666 43.5721 5.24C44.4121 3.79333 45.1587 2.72 45.8121 2.02C46.2787 2.06666 46.8854 2.25333 47.6321 2.58C48.4254 2.86 49.2187 3.21 50.0121 3.63C50.8054 4.05 51.5287 4.51666 52.1821 5.03C52.8354 5.49667 53.2787 5.94 53.5121 6.36C52.6721 7.15333 51.8321 8.18 50.9921 9.44C50.1521 10.7 49.3121 12.1467 48.4721 13.78C47.6787 15.4133 46.8854 17.1867 46.0921 19.1C45.2987 21.0133 44.5521 22.9967 43.8521 25.05C44.7854 25.89 45.2521 26.94 45.2521 28.2C45.2521 29.0867 45.0654 29.9033 44.6921 30.65C44.2721 30.5567 43.8521 30.51 43.4321 30.51C43.0121 30.4633 42.5687 30.4167 42.1021 30.37C41.3087 32.89 40.5854 35.3867 39.9321 37.86C39.2787 40.3333 38.7187 42.69 38.2521 44.93C37.8321 47.17 37.4821 49.2233 37.2021 51.09C36.9687 52.9567 36.8521 54.52 36.8521 55.78C36.8521 56.2467 36.8521 56.62 36.8521 56.9C36.8987 57.18 36.9454 57.4133 36.9921 57.6C35.9654 57.5533 35.2187 57.3667 34.7521 57.04C34.2854 56.76 33.9354 56.4333 33.7021 56.06C33.4687 55.7333 33.2587 55.3833 33.0721 55.01C32.8854 54.6833 32.5821 54.4267 32.1621 54.24C31.8354 54.1 31.5321 53.7733 31.2521 53.26C30.9721 52.7467 30.7387 52.1633 30.5521 51.51C30.3654 50.8567 30.2254 50.2033 30.1321 49.55C30.0387 48.8967 29.9921 48.36 29.9921 47.94ZM73.0678 23.02C72.8811 25.9133 72.3678 28.41 71.5278 30.51C70.6878 32.5633 69.4744 34.3833 67.8878 35.97C66.3478 37.51 64.4578 38.91 62.2178 40.17C59.9778 41.43 57.3644 42.6433 54.3778 43.81C54.3778 44.09 54.3544 44.3933 54.3078 44.72C54.3078 45 54.3078 45.3033 54.3078 45.63C54.3078 46.2367 54.3544 46.8667 54.4478 47.52C54.5411 48.1733 54.7044 48.78 54.9378 49.34C55.1711 49.9 55.4978 50.3667 55.9178 50.74C56.3378 51.0667 56.8744 51.23 57.5278 51.23C58.7878 51.23 60.0244 50.95 61.2378 50.39C62.4511 49.83 63.5944 49.1533 64.6678 48.36C65.7878 47.52 66.8144 46.6333 67.7478 45.7C68.7278 44.72 69.5911 43.8333 70.3378 43.04C70.8044 43.46 71.2011 43.8567 71.5278 44.23C69.4278 47.03 67.1178 49.3633 64.5978 51.23C62.1244 53.05 59.7678 54.2167 57.5278 54.73C54.3078 54.3567 51.7878 53.19 49.9678 51.23C48.1944 49.2233 47.3078 46.82 47.3078 44.02C47.3078 42.1067 47.5644 40.17 48.0778 38.21C48.6378 36.2033 49.3844 34.29 50.3178 32.47C51.2978 30.6033 52.4178 28.8533 53.6778 27.22C54.9844 25.5867 56.3611 24.1633 57.8078 22.95C59.3011 21.7367 60.8178 20.78 62.3578 20.08C63.9444 19.38 65.5078 19.03 67.0478 19.03C69.1944 19.31 71.2011 20.64 73.0678 23.02ZM68.2378 25.33C66.9778 25.5167 65.6711 26.03 64.3178 26.87C62.9644 27.71 61.6811 28.83 60.4678 30.23C59.3011 31.63 58.2278 33.2633 57.2478 35.13C56.2678 36.9967 55.4978 39.0033 54.9378 41.15C58.6711 39.2833 61.7744 36.9967 64.2478 34.29C66.7211 31.5367 68.0511 28.55 68.2378 25.33ZM74.6286 50.6C74.8619 49.2467 75.2586 47.4733 75.8186 45.28C76.4252 43.04 77.1252 40.6833 77.9186 38.21C78.7119 35.69 79.5519 33.17 80.4386 30.65C81.3252 28.13 82.1886 25.8667 83.0286 23.86C83.6352 22.4133 84.1719 21.2933 84.6386 20.5C85.1052 19.66 85.6186 18.96 86.1786 18.4C86.8319 18.4933 87.5086 18.6567 88.2086 18.89C88.9086 19.1233 89.5852 19.4033 90.2386 19.73C90.8919 20.0567 91.4752 20.4067 91.9886 20.78C92.5019 21.1067 92.8986 21.4333 93.1786 21.76C91.9186 23.2533 90.7986 24.9567 89.8186 26.87C88.8852 28.7833 87.9286 31.2333 86.9486 34.22C89.4686 31.98 91.6852 29.8333 93.5986 27.78C95.5586 25.7267 97.3786 23.44 99.0586 20.92C99.3386 20.6867 99.8286 20.57 100.529 20.57C101.182 20.57 101.812 20.6867 102.419 20.92C103.025 21.1067 103.445 21.3867 103.679 21.76C102.839 24 102.419 26.2167 102.419 28.41C102.419 30.4633 102.722 32.0033 103.329 33.03C103.282 33.31 102.955 33.8467 102.349 34.64C101.789 35.4333 101.159 36.18 100.459 36.88C99.1986 36.2267 98.0786 35.34 97.0986 34.22C96.1186 33.0533 95.3952 31.7933 94.9286 30.44C92.7352 31.98 90.8686 33.4967 89.3286 34.99C87.7886 36.4367 86.4586 38.07 85.3386 39.89C84.2652 41.6633 83.3319 43.7167 82.5386 46.05C81.7919 48.3833 81.0686 51.16 80.3686 54.38C79.9486 54.3333 79.4352 54.17 78.8286 53.89C78.2686 53.6567 77.6852 53.3533 77.0786 52.98C76.5186 52.6067 76.0052 52.21 75.5386 51.79C75.0719 51.37 74.7686 50.9733 74.6286 50.6ZM108.671 25.19C108.438 24.91 108.228 24.3267 108.041 23.44C107.854 22.5067 107.761 21.7133 107.761 21.06C108.974 21.1533 110.141 21.2467 111.261 21.34C112.381 21.3867 113.408 21.4333 114.341 21.48C115.041 20.08 115.788 18.7033 116.581 17.35C117.421 15.95 118.214 14.69 118.961 13.57C119.754 12.4033 120.478 11.4233 121.131 10.63C121.831 9.83666 122.368 9.32333 122.741 9.09C123.208 9.09 123.791 9.18333 124.491 9.37C125.238 9.51 125.984 9.72 126.731 10C127.478 10.2333 128.154 10.49 128.761 10.77C129.368 11.05 129.788 11.33 130.021 11.61C128.621 13.3833 127.408 15.04 126.381 16.58C125.401 18.0733 124.328 19.8 123.161 21.76C124.094 21.76 125.028 21.7367 125.961 21.69C126.941 21.6433 127.921 21.5733 128.901 21.48C129.134 21.7133 129.321 22.0167 129.461 22.39C129.601 22.7167 129.671 23.0667 129.671 23.44C127.384 24.28 124.608 24.7467 121.341 24.84C120.174 27.08 119.124 29.32 118.191 31.56C117.304 33.7533 116.534 35.8767 115.881 37.93C115.274 39.9833 114.784 41.92 114.411 43.74C114.084 45.56 113.921 47.1933 113.921 48.64C113.921 50.6933 114.691 51.8367 116.231 52.07C117.631 51.8833 118.961 51.5333 120.221 51.02C121.481 50.5067 122.601 49.8533 123.581 49.06C123.861 49.48 124.024 49.83 124.071 50.11C123.791 50.53 123.301 51.02 122.601 51.58C121.948 52.14 121.224 52.6767 120.431 53.19C119.638 53.75 118.868 54.2167 118.121 54.59C117.374 54.9633 116.814 55.1733 116.441 55.22C115.274 55.1733 114.108 54.9167 112.941 54.45C111.774 53.9833 110.701 53.4 109.721 52.7C108.788 52 108.018 51.23 107.411 50.39C106.804 49.5033 106.501 48.64 106.501 47.8C106.501 46.68 106.641 45.28 106.921 43.6C107.248 41.8733 107.691 40.0067 108.251 38C108.811 35.9933 109.464 33.8933 110.211 31.7C110.958 29.5067 111.774 27.3367 112.661 25.19H108.671ZM126.63 51.02C126.63 50.2733 127.284 49.0833 128.59 47.45C129.897 45.77 131.624 43.88 133.77 41.78C135.964 39.6333 138.46 37.3933 141.26 35.06C144.107 32.68 147.047 30.3933 150.08 28.2C148.12 27.78 146.557 27.4767 145.39 27.29C144.27 27.1033 143.36 27.01 142.66 27.01C141.307 27.01 140.094 27.1967 139.02 27.57C137.947 27.9433 136.897 28.55 135.87 29.39C133.724 27.5233 132.65 25.3767 132.65 22.95C132.65 22.2033 132.674 21.76 132.72 21.62C133.514 20.8267 134.447 20.22 135.52 19.8C136.64 19.38 137.807 19.17 139.02 19.17C140.327 19.17 141.657 19.38 143.01 19.8C144.364 20.22 145.694 20.6867 147 21.2C148.307 21.6667 149.52 22.11 150.64 22.53C151.807 22.95 152.834 23.16 153.72 23.16C154.234 23.16 154.794 23.09 155.4 22.95C156.054 22.81 156.59 22.6233 157.01 22.39C157.43 22.7167 157.804 23.37 158.13 24.35C158.504 25.33 158.69 26.2867 158.69 27.22C157.244 27.78 155.494 28.76 153.44 30.16C151.434 31.56 149.38 33.17 147.28 34.99C145.18 36.81 143.127 38.7467 141.12 40.8C139.16 42.8533 137.527 44.79 136.22 46.61C137.2 47.03 138.53 47.24 140.21 47.24C141.284 47.24 142.38 47.1467 143.5 46.96C144.62 46.7733 145.694 46.5167 146.72 46.19C147.794 45.8633 148.774 45.49 149.66 45.07C150.547 44.6033 151.294 44.1133 151.9 43.6C154.094 45 155.19 47.0533 155.19 49.76C155.19 50.1333 155.167 50.4367 155.12 50.67C155.12 50.9033 155.097 51.1833 155.05 51.51C152.904 52.8633 150.57 53.54 148.05 53.54C146.79 53.54 145.53 53.4 144.27 53.12C143.01 52.8867 141.774 52.63 140.56 52.35C139.394 52.07 138.274 51.8133 137.2 51.58C136.174 51.3 135.217 51.16 134.33 51.16C132.09 51.16 130.27 52.21 128.87 54.31C128.264 54.0767 127.75 53.6567 127.33 53.05C126.957 52.4433 126.724 51.7667 126.63 51.02Z"
                                    fill="black"
                                />
                            </svg>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    목록
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
                                    <Nav.Link href="/InstrumentUpload">
                                        판매하기
                                    </Nav.Link>
                                    {/* {auth?.userEmail ? ( */}
                                    {user ? (
                                        <Nav.Link
                                            href="/login"
                                            onClick={logout}
                                        >
                                            로그아웃
                                        </Nav.Link> // 강제 로그 아웃(강제 토큰 삭제)
                                    ) : (
                                        /*임시 로그아웃 페이지- 강제 토큰 삭제*/
                                        // <Nav.Link href="/login" >
                                        // 로그아웃
                                        // </Nav.Link>
                                        <Nav.Link href="/login">
                                            로그인/회원가입
                                        </Nav.Link>
                                    )}
                                    <Nav.Link href="/mypage">
                                        <svg
                                            width="37"
                                            height="37"
                                            viewBox="0 0 50 50"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 18.75H11.75V19V28V28.25H12H25H25.25V28V19V18.75H25H12Z"
                                                stroke="#637DBE"
                                                stroke-width="0.5"
                                            />
                                            <rect
                                                x="12"
                                                y="17"
                                                width="13"
                                                height="2"
                                                fill="white"
                                            />
                                            <circle
                                                cx="18.5"
                                                cy="18.5"
                                                r="17.5"
                                                stroke="#637DBE"
                                                stroke-width="2"
                                            />
                                            <path
                                                d="M18.6701 7.81678L18.5 7.65887L18.3299 7.81678L7.50459 17.8668L7.03795 18.3H7.67468H29.3253H29.962L29.4954 17.8668L18.6701 7.81678Z"
                                                stroke="#637DBE"
                                                stroke-width="0.5"
                                            />
                                            <path
                                                d="M16.05 22.5C16.05 21.1469 17.1469 20.05 18.5 20.05C19.8531 20.05 20.95 21.1469 20.95 22.5V27.95H16.05V22.5Z"
                                                stroke="#637DBE"
                                                stroke-width="0.1"
                                            />
                                            <circle
                                                cx="17.25"
                                                cy="24.25"
                                                r="0.275"
                                                fill="#637DBE"
                                                stroke="#637DBE"
                                                stroke-width="0.05"
                                            />
                                        </svg>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default Header;
