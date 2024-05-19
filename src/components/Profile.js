import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar } from "@mui/material";

// import PersonIcon from "@mui/icons-material/Person";
import { Button } from "antd";

function Profile({ userData }) {
    useEffect(() => {
        console.log(userData);
    }, []);
    const navigate = useNavigate();
    // '내 프로필 수정' 버튼 클릭 시 '/myedit' 페이지로 이동하는 함수
    const handleEditProfile = () => {
        navigate("/myedit"); // '/myedit' 페이지로 이동
    };
    return (
        <section className="profile">
            <div style={{ textAlign: "left" }}>
                <svg
                    width="96"
                    height="22"
                    viewBox="0 0 96 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "40" }}
                >
                    <path
                        d="M0.0849609 0.272727H5.73695L9.62473 9.74716H9.82076L13.7085 0.272727H19.3605V17H14.9173V7.32955H14.7867L11.0622 16.8693H8.38326L4.65882 7.2642H4.52814V17H0.0849609V0.272727ZM24.3224 21.7045C23.8051 21.7045 23.3123 21.6637 22.844 21.582C22.3757 21.5058 21.9646 21.3996 21.6107 21.2635L22.5908 18.0618C22.9611 18.1925 23.2987 18.2769 23.6036 18.315C23.914 18.3531 24.1781 18.3313 24.3959 18.2496C24.6191 18.168 24.7797 18.0128 24.8778 17.7841L24.9758 17.5554L20.5653 4.45455H25.2698L27.2954 13.1449H27.426L29.4843 4.45455H34.2215L29.6476 18.0455C29.4189 18.737 29.0868 19.3577 28.6512 19.9077C28.221 20.4631 27.6547 20.9014 26.9523 21.2227C26.2499 21.5439 25.3733 21.7045 24.3224 21.7045ZM40.0205 17V0.272727H47.2407C48.4822 0.272727 49.5684 0.517755 50.4996 1.00781C51.4307 1.49787 52.1549 2.18667 52.6721 3.07422C53.1894 3.96177 53.4481 4.99905 53.4481 6.18608C53.4481 7.384 53.1813 8.42128 52.6476 9.29794C52.1195 10.1746 51.3762 10.8498 50.4179 11.3235C49.465 11.7972 48.3515 12.0341 47.0773 12.0341H42.7648V8.50568H46.1626C46.6962 8.50568 47.1508 8.41312 47.5265 8.22798C47.9077 8.03741 48.199 7.76787 48.4005 7.41939C48.6074 7.0709 48.7108 6.6598 48.7108 6.18608C48.7108 5.70691 48.6074 5.29853 48.4005 4.96094C48.199 4.6179 47.9077 4.35653 47.5265 4.17685C47.1508 3.99171 46.6962 3.89915 46.1626 3.89915H44.5617V17H40.0205ZM58.1138 17.196C57.3134 17.196 56.6055 17.0653 55.9902 16.804C55.3804 16.5372 54.9012 16.1342 54.5527 15.5952C54.2042 15.0561 54.03 14.37 54.03 13.5369C54.03 12.8509 54.1471 12.2655 54.3812 11.7809C54.6154 11.2908 54.9421 10.8906 55.3613 10.5803C55.7806 10.2699 56.2679 10.033 56.8233 9.86967C57.3842 9.70632 57.9886 9.60014 58.6365 9.55114C59.339 9.49669 59.9025 9.43134 60.3272 9.35511C60.7574 9.27344 61.0678 9.16181 61.2583 9.02024C61.4489 8.87322 61.5442 8.67992 61.5442 8.44034V8.40767C61.5442 8.08097 61.419 7.83049 61.1685 7.65625C60.918 7.48201 60.5968 7.39489 60.2047 7.39489C59.7746 7.39489 59.4234 7.49017 59.1511 7.68075C58.8843 7.86589 58.7237 8.15175 58.6692 8.53835H54.5201C54.5745 7.77604 54.8168 7.07363 55.247 6.43111C55.6826 5.78314 56.3169 5.26586 57.15 4.87926C57.9831 4.48722 59.0231 4.29119 60.2701 4.29119C61.1685 4.29119 61.9744 4.39737 62.6877 4.60973C63.401 4.81664 64.0081 5.10795 64.5091 5.48366C65.01 5.85393 65.3912 6.28954 65.6525 6.79048C65.9193 7.28598 66.0527 7.82505 66.0527 8.40767V17H61.8382V15.2358H61.7402C61.4898 15.7041 61.1848 16.0825 60.8255 16.3711C60.4715 16.6597 60.0659 16.8693 59.6085 17C59.1565 17.1307 58.6583 17.196 58.1138 17.196ZM59.584 14.3537C59.927 14.3537 60.2483 14.2829 60.5478 14.1413C60.8527 13.9998 61.1004 13.7956 61.291 13.5288C61.4816 13.262 61.5769 12.938 61.5769 12.5568V11.5114C61.4571 11.5604 61.3291 11.6067 61.193 11.6502C61.0623 11.6938 60.9208 11.7346 60.7683 11.7727C60.6213 11.8108 60.4634 11.8462 60.2946 11.8789C60.1312 11.9116 59.9597 11.9415 59.78 11.9688C59.4315 12.0232 59.1457 12.113 58.9224 12.2383C58.7046 12.3581 58.5413 12.5078 58.4324 12.6875C58.3289 12.8617 58.2772 13.0578 58.2772 13.2756C58.2772 13.6241 58.3997 13.8909 58.6447 14.076C58.8897 14.2611 59.2028 14.3537 59.584 14.3537ZM74.251 21.9659C72.9932 21.9659 71.915 21.7862 71.0166 21.4268C70.1236 21.0729 69.4294 20.5829 68.9339 19.9567C68.4438 19.3359 68.1688 18.6226 68.1089 17.8168H72.4541C72.4977 18.0836 72.6066 18.2987 72.7808 18.462C72.955 18.6254 73.1783 18.7424 73.4506 18.8132C73.7282 18.8894 74.0386 18.9276 74.3817 18.9276C74.9643 18.9276 75.4462 18.786 75.8273 18.5028C76.2139 18.2197 76.4072 17.7079 76.4072 16.9673V14.8438H76.2765C76.1132 15.2685 75.8627 15.6306 75.5251 15.93C75.1875 16.2241 74.7819 16.45 74.3082 16.608C73.8344 16.7604 73.3144 16.8366 72.7481 16.8366C71.8551 16.8366 71.0329 16.6297 70.2815 16.2159C69.5355 15.8021 68.9366 15.146 68.4846 14.2475C68.0381 13.3491 67.8149 12.1757 67.8149 10.7273C67.8149 9.21354 68.049 7.98295 68.5173 7.03551C68.991 6.08807 69.6009 5.39382 70.3469 4.95277C71.0983 4.51172 71.8878 4.29119 72.7155 4.29119C73.3362 4.29119 73.8807 4.40009 74.349 4.6179C74.8173 4.83025 75.2093 5.11612 75.5251 5.4755C75.8409 5.82943 76.0805 6.21875 76.2439 6.64347H76.3419V4.45455H80.8504V16.9673C80.8504 18.0291 80.5754 18.9303 80.0255 19.6708C79.481 20.4168 78.7132 20.9858 77.7222 21.3778C76.7312 21.7699 75.5741 21.9659 74.251 21.9659ZM74.4143 13.6349C74.8282 13.6349 75.1821 13.5206 75.4761 13.2919C75.7756 13.0578 76.0043 12.7256 76.1622 12.2955C76.3256 11.8598 76.4072 11.3371 76.4072 10.7273C76.4072 10.1065 76.3256 9.57564 76.1622 9.13459C76.0043 8.68809 75.7756 8.34777 75.4761 8.11364C75.1821 7.87405 74.8282 7.75426 74.4143 7.75426C74.0005 7.75426 73.6466 7.87405 73.3525 8.11364C73.064 8.34777 72.8407 8.68809 72.6828 9.13459C72.5303 9.57564 72.4541 10.1065 72.4541 10.7273C72.4541 11.348 72.5303 11.8762 72.6828 12.3118C72.8407 12.742 73.064 13.0714 73.3525 13.3001C73.6466 13.5233 74.0005 13.6349 74.4143 13.6349ZM89.1548 17.2287C87.8153 17.2287 86.661 16.9728 85.6918 16.4609C84.728 15.9437 83.9847 15.2031 83.462 14.2393C82.9447 13.2701 82.6861 12.1103 82.6861 10.7599C82.6861 9.46402 82.9474 8.33144 83.4702 7.36222C83.9929 6.39299 84.7307 5.63885 85.6836 5.09979C86.6365 4.56072 87.7609 4.29119 89.0568 4.29119C90.0043 4.29119 90.8619 4.43821 91.6296 4.73224C92.3974 5.02628 93.0535 5.45372 93.598 6.01456C94.1425 6.56996 94.5618 7.24515 94.8558 8.04013C95.1499 8.83511 95.2969 9.73082 95.2969 10.7273V11.7727H84.0909V9.28977H91.1477C91.1423 8.9304 91.0497 8.61458 90.87 8.34233C90.6958 8.06463 90.4589 7.84955 90.1594 7.69709C89.8654 7.53918 89.5305 7.46023 89.1548 7.46023C88.79 7.46023 88.4551 7.53918 88.1502 7.69709C87.8453 7.84955 87.6003 8.06191 87.4151 8.33416C87.2354 8.60642 87.1402 8.92495 87.1293 9.28977V11.9688C87.1293 12.3717 87.2137 12.7311 87.3825 13.0469C87.5513 13.3627 87.7936 13.6104 88.1094 13.7901C88.4252 13.9698 88.8063 14.0597 89.2528 14.0597C89.5632 14.0597 89.8464 14.0161 90.1023 13.929C90.3636 13.8419 90.5869 13.7166 90.772 13.5533C90.9571 13.3845 91.0933 13.183 91.1804 12.9489H95.2969C95.1553 13.8201 94.8204 14.5769 94.2923 15.2195C93.7641 15.8565 93.0644 16.352 92.1932 16.706C91.3274 17.0545 90.3146 17.2287 89.1548 17.2287Z"
                        fill="black"
                    />
                </svg>
            </div>
            {/* <Divider /> */}
            <div
                className="profile_card"
                style={{
                    marginTop: "24px",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <img
                    src={userData?.profileImageUrl}
                    alt="Profile"
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: "20%",
                        marginRight: "50px",
                        marginLeft: "350px",
                    }}
                />
                <div className="detail_box" style={{ flex: 1 }}>
                    <div style={{ textAlign: "left" }}>
                        {userData?.nickName}
                    </div>
                    <div style={{ textAlign: "left" }}>
                        이메일 :{" "}
                        <span style={{ color: "#637DBE" }}>
                            {userData?.email}
                        </span>
                    </div>
                    <div style={{ textAlign: "left" }}>
                        가입일 :{" "}
                        <span style={{ color: "#637DBE" }}>
                            {userData?.createdAt
                                ? `${userData?.createdAt[0]}-${String(
                                      userData?.createdAt[1]
                                  ).padStart(2, "0")}-${String(
                                      userData?.createdAt[2]
                                  ).padStart(2, "0")}`
                                : ""}
                        </span>
                    </div>
                </div>

                <div style={{ textAlign: "left", marginRight: "70px" }}>
                    <span
                        style={{
                            color: `${
                                userData?.isKakaoAccountLinked
                                    ? "#000000"
                                    : "#BBBBBB"
                            }`,
                            // fontWeight: "bold",
                        }}
                    >
                        {userData?.isKakaoAccountLinked
                            ? "카카오 연동 완료"
                            : "카카오 연동 미완료"}
                    </span>
                </div>

                <Button
                    style={{ marginLeft: "auto", marginRight: "350px" }}
                    onClick={handleEditProfile}
                >
                    내 프로필 수정
                </Button>
            </div>
        </section>
    );
}

export default Profile;
