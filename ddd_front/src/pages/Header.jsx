import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const HeaderDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  background-color: rgba(139, 40, 66, 1);
  align-items: center;
  justify-content: center;
`;

const HamburgerToggle = styled.div`
  padding: 1rem 1rem;
  cursor: pointer;
  img {
    width: 32px;
  }
`;

const MainLogo = styled.div`
  color: rgba(224, 200, 149, 1);
  width: 160px;
  margin: 0 auto;
  align-items: center;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
  font-size: 160%;
  padding: 1rem 1rem;
  font-weight: 540;
`;

const NavMenu = styled.div`
  list-style: none;
  text-align: center;
  .show {
    position: fixed;
    width: 300px;
    top: 0;
    left: 0;
    height: 100%;
    transition: 1s;
    background-color: rgba(139, 40, 66, 1);
    z-index: 999;
  }

  .hide {
    position: fixed;
    width: 300px;
    top: 0px;
    left: -300px;
    height: 100%;
    transition: 1.2s;
  }

  ul li {
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    display: inline-block;
    margin-left: 13%;
    margin-right: 19%;
    text-decoration: none;
  }

  ul li img {
    vertical-align: middle;
    width: 38px;
  }
`;

const NavLogo = styled.div`
  color: rgba(224, 200, 149, 1);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
  float: left;
  margin: 48px 0px 20px 90px;
  font-size: xx-large;
  font-weight: 540;
`;

const BackImgDiv = styled.div`
  margin-top: 48px;
  img {
    padding-left: 5px;
    width: 32px;
  }
`;

const GhostSomImg = styled.img`
  width: 100%;
  margin: auto;
`;

const ListDiv = styled.div`
  line-height: 70px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  display: inline-block;
  text-decoration: none;
  margin: 0 auto;
`;

const ListLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  color: white;
  gap: 15px;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HeaderDiv>
        <HamburgerToggle onClick={() => setOpen(!isOpen)}>
          <img src="img/hamburger.png" alt="메뉴" />
        </HamburgerToggle>
        <MainLogo>同 動 烔</MainLogo>
      </HeaderDiv>
      <NavMenu isOpen={isOpen}>
        <ul className={isOpen ? "show" : "hide"}>
          <NavLogo>同 動 烔</NavLogo>
          <BackImgDiv>
            <img
              src="img/back_toggle.png"
              onClick={() => setOpen(!isOpen)}
              alt="닫기"
            />
          </BackImgDiv>
          <ListDiv>
            <ListLink
              to={"/home"}
              children={({ isActive }) => {
                return (
                  <>
                    {isActive ? (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2528)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L26.108 32.286C24.608 31.518 23.432 31.266 21.7745 32.115L21.4775 32.277C20.6226 32.7654 19.6607 33.0359 18.6766 33.0646C17.6925 33.0934 16.7164 32.8796 15.8345 32.442L15.5225 32.277C13.607 31.182 12.2735 31.509 10.3475 32.577C7.9475 33.912 5 32.1765 5 29.4315V16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3V3ZM13.25 13.5C12.6533 13.5 12.081 13.7371 11.659 14.159C11.2371 14.581 11 15.1533 11 15.75C11 16.3467 11.2371 16.919 11.659 17.341C12.081 17.7629 12.6533 18 13.25 18C13.8467 18 14.419 17.7629 14.841 17.341C15.2629 16.919 15.5 16.3467 15.5 15.75C15.5 15.1533 15.2629 14.581 14.841 14.159C14.419 13.7371 13.8467 13.5 13.25 13.5ZM23.75 13.5C23.1533 13.5 22.581 13.7371 22.159 14.159C21.7371 14.581 21.5 15.1533 21.5 15.75C21.5 16.3467 21.7371 16.919 22.159 17.341C22.581 17.7629 23.1533 18 23.75 18C24.3467 18 24.919 17.7629 25.341 17.341C25.7629 16.919 26 16.3467 26 15.75C26 15.1533 25.7629 14.581 25.341 14.159C24.919 13.7371 24.3467 13.5 23.75 13.5V13.5Z"
                            fill="#E0C895"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2528">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2532)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 6C15.7152 6 13.0445 7.10625 11.0754 9.07538C9.10625 11.0445 8 13.7152 8 16.5V29.43C7.99995 29.5345 8.02718 29.6371 8.07899 29.7279C8.1308 29.8186 8.2054 29.8942 8.29541 29.9472C8.38542 30.0003 8.48771 30.0289 8.59217 30.0302C8.69663 30.0316 8.79964 30.0057 8.891 29.955L10.3055 29.1705C11.2074 28.6692 12.2234 28.4091 13.2553 28.4151C14.2871 28.4212 15.3 28.6932 16.196 29.205L17.012 29.6715C17.4652 29.9304 17.9781 30.0665 18.5 30.0665C19.0219 30.0665 19.5348 29.9304 19.988 29.6715L20.804 29.2065C21.6999 28.6945 22.7127 28.4222 23.7445 28.4159C24.7764 28.4096 25.7924 28.6695 26.6945 29.1705L28.109 29.955C28.2004 30.0057 28.3034 30.0316 28.4078 30.0302C28.5123 30.0289 28.6146 30.0003 28.7046 29.9472C28.7946 29.8942 28.8692 29.8186 28.921 29.7279C28.9728 29.6371 29.0001 29.5345 29 29.43V16.5C29 15.1211 28.7284 13.7557 28.2007 12.4818C27.6731 11.2079 26.8996 10.0504 25.9246 9.07538C24.9496 8.10036 23.7921 7.32694 22.5182 6.79926C21.2443 6.27159 19.8789 6 18.5 6V6ZM5 16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L25.238 31.7925C24.7869 31.5418 24.2787 31.4118 23.7626 31.415C23.2466 31.4181 22.74 31.5544 22.292 31.8105L21.4775 32.2755C20.5708 32.7938 19.5444 33.0664 18.5 33.0664C17.4556 33.0664 16.4292 32.7938 15.5225 32.2755L14.708 31.8105C14.26 31.5544 13.7534 31.4181 13.2374 31.415C12.7213 31.4118 12.2131 31.5418 11.762 31.7925L10.349 32.5785C7.949 33.9105 5 32.175 5 29.43V16.5ZM16.25 15.75C16.25 16.3467 16.0129 16.919 15.591 17.341C15.169 17.7629 14.5967 18 14 18C13.4033 18 12.831 17.7629 12.409 17.341C11.9871 16.919 11.75 16.3467 11.75 15.75C11.75 15.1533 11.9871 14.581 12.409 14.159C12.831 13.7371 13.4033 13.5 14 13.5C14.5967 13.5 15.169 13.7371 15.591 14.159C16.0129 14.581 16.25 15.1533 16.25 15.75ZM23 18C23.5967 18 24.169 17.7629 24.591 17.341C25.0129 16.919 25.25 16.3467 25.25 15.75C25.25 15.1533 25.0129 14.581 24.591 14.159C24.169 13.7371 23.5967 13.5 23 13.5C22.4033 13.5 21.831 13.7371 21.409 14.159C20.9871 14.581 20.75 15.1533 20.75 15.75C20.75 16.3467 20.9871 16.919 21.409 17.341C21.831 17.7629 22.4033 18 23 18Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2532">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}

                    <span style={{ color: isActive ? "#E0C895" : "white" }}>
                      HOME
                    </span>
                  </>
                );
              }}
              onClick={() => setOpen(!isOpen)}
            />

            <ListLink
              to={"/intro/InfoDDD"}
              children={({ isActive }) => {
                return (
                  <>
                    {isActive ? (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2528)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L26.108 32.286C24.608 31.518 23.432 31.266 21.7745 32.115L21.4775 32.277C20.6226 32.7654 19.6607 33.0359 18.6766 33.0646C17.6925 33.0934 16.7164 32.8796 15.8345 32.442L15.5225 32.277C13.607 31.182 12.2735 31.509 10.3475 32.577C7.9475 33.912 5 32.1765 5 29.4315V16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3V3ZM13.25 13.5C12.6533 13.5 12.081 13.7371 11.659 14.159C11.2371 14.581 11 15.1533 11 15.75C11 16.3467 11.2371 16.919 11.659 17.341C12.081 17.7629 12.6533 18 13.25 18C13.8467 18 14.419 17.7629 14.841 17.341C15.2629 16.919 15.5 16.3467 15.5 15.75C15.5 15.1533 15.2629 14.581 14.841 14.159C14.419 13.7371 13.8467 13.5 13.25 13.5ZM23.75 13.5C23.1533 13.5 22.581 13.7371 22.159 14.159C21.7371 14.581 21.5 15.1533 21.5 15.75C21.5 16.3467 21.7371 16.919 22.159 17.341C22.581 17.7629 23.1533 18 23.75 18C24.3467 18 24.919 17.7629 25.341 17.341C25.7629 16.919 26 16.3467 26 15.75C26 15.1533 25.7629 14.581 25.341 14.159C24.919 13.7371 24.3467 13.5 23.75 13.5V13.5Z"
                            fill="#E0C895"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2528">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2532)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 6C15.7152 6 13.0445 7.10625 11.0754 9.07538C9.10625 11.0445 8 13.7152 8 16.5V29.43C7.99995 29.5345 8.02718 29.6371 8.07899 29.7279C8.1308 29.8186 8.2054 29.8942 8.29541 29.9472C8.38542 30.0003 8.48771 30.0289 8.59217 30.0302C8.69663 30.0316 8.79964 30.0057 8.891 29.955L10.3055 29.1705C11.2074 28.6692 12.2234 28.4091 13.2553 28.4151C14.2871 28.4212 15.3 28.6932 16.196 29.205L17.012 29.6715C17.4652 29.9304 17.9781 30.0665 18.5 30.0665C19.0219 30.0665 19.5348 29.9304 19.988 29.6715L20.804 29.2065C21.6999 28.6945 22.7127 28.4222 23.7445 28.4159C24.7764 28.4096 25.7924 28.6695 26.6945 29.1705L28.109 29.955C28.2004 30.0057 28.3034 30.0316 28.4078 30.0302C28.5123 30.0289 28.6146 30.0003 28.7046 29.9472C28.7946 29.8942 28.8692 29.8186 28.921 29.7279C28.9728 29.6371 29.0001 29.5345 29 29.43V16.5C29 15.1211 28.7284 13.7557 28.2007 12.4818C27.6731 11.2079 26.8996 10.0504 25.9246 9.07538C24.9496 8.10036 23.7921 7.32694 22.5182 6.79926C21.2443 6.27159 19.8789 6 18.5 6V6ZM5 16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L25.238 31.7925C24.7869 31.5418 24.2787 31.4118 23.7626 31.415C23.2466 31.4181 22.74 31.5544 22.292 31.8105L21.4775 32.2755C20.5708 32.7938 19.5444 33.0664 18.5 33.0664C17.4556 33.0664 16.4292 32.7938 15.5225 32.2755L14.708 31.8105C14.26 31.5544 13.7534 31.4181 13.2374 31.415C12.7213 31.4118 12.2131 31.5418 11.762 31.7925L10.349 32.5785C7.949 33.9105 5 32.175 5 29.43V16.5ZM16.25 15.75C16.25 16.3467 16.0129 16.919 15.591 17.341C15.169 17.7629 14.5967 18 14 18C13.4033 18 12.831 17.7629 12.409 17.341C11.9871 16.919 11.75 16.3467 11.75 15.75C11.75 15.1533 11.9871 14.581 12.409 14.159C12.831 13.7371 13.4033 13.5 14 13.5C14.5967 13.5 15.169 13.7371 15.591 14.159C16.0129 14.581 16.25 15.1533 16.25 15.75ZM23 18C23.5967 18 24.169 17.7629 24.591 17.341C25.0129 16.919 25.25 16.3467 25.25 15.75C25.25 15.1533 25.0129 14.581 24.591 14.159C24.169 13.7371 23.5967 13.5 23 13.5C22.4033 13.5 21.831 13.7371 21.409 14.159C20.9871 14.581 20.75 15.1533 20.75 15.75C20.75 16.3467 20.9871 16.919 21.409 17.341C21.831 17.7629 22.4033 18 23 18Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2532">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}

                    <span style={{ color: isActive ? "#E0C895" : "white" }}>
                      INTRODUCE
                    </span>
                  </>
                );
              }}
              onClick={() => setOpen(!isOpen)}
            />
            <ListLink
              to={"/timetable"}
              children={({ isActive }) => {
                return (
                  <>
                    {isActive ? (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2528)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L26.108 32.286C24.608 31.518 23.432 31.266 21.7745 32.115L21.4775 32.277C20.6226 32.7654 19.6607 33.0359 18.6766 33.0646C17.6925 33.0934 16.7164 32.8796 15.8345 32.442L15.5225 32.277C13.607 31.182 12.2735 31.509 10.3475 32.577C7.9475 33.912 5 32.1765 5 29.4315V16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3V3ZM13.25 13.5C12.6533 13.5 12.081 13.7371 11.659 14.159C11.2371 14.581 11 15.1533 11 15.75C11 16.3467 11.2371 16.919 11.659 17.341C12.081 17.7629 12.6533 18 13.25 18C13.8467 18 14.419 17.7629 14.841 17.341C15.2629 16.919 15.5 16.3467 15.5 15.75C15.5 15.1533 15.2629 14.581 14.841 14.159C14.419 13.7371 13.8467 13.5 13.25 13.5ZM23.75 13.5C23.1533 13.5 22.581 13.7371 22.159 14.159C21.7371 14.581 21.5 15.1533 21.5 15.75C21.5 16.3467 21.7371 16.919 22.159 17.341C22.581 17.7629 23.1533 18 23.75 18C24.3467 18 24.919 17.7629 25.341 17.341C25.7629 16.919 26 16.3467 26 15.75C26 15.1533 25.7629 14.581 25.341 14.159C24.919 13.7371 24.3467 13.5 23.75 13.5V13.5Z"
                            fill="#E0C895"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2528">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2532)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 6C15.7152 6 13.0445 7.10625 11.0754 9.07538C9.10625 11.0445 8 13.7152 8 16.5V29.43C7.99995 29.5345 8.02718 29.6371 8.07899 29.7279C8.1308 29.8186 8.2054 29.8942 8.29541 29.9472C8.38542 30.0003 8.48771 30.0289 8.59217 30.0302C8.69663 30.0316 8.79964 30.0057 8.891 29.955L10.3055 29.1705C11.2074 28.6692 12.2234 28.4091 13.2553 28.4151C14.2871 28.4212 15.3 28.6932 16.196 29.205L17.012 29.6715C17.4652 29.9304 17.9781 30.0665 18.5 30.0665C19.0219 30.0665 19.5348 29.9304 19.988 29.6715L20.804 29.2065C21.6999 28.6945 22.7127 28.4222 23.7445 28.4159C24.7764 28.4096 25.7924 28.6695 26.6945 29.1705L28.109 29.955C28.2004 30.0057 28.3034 30.0316 28.4078 30.0302C28.5123 30.0289 28.6146 30.0003 28.7046 29.9472C28.7946 29.8942 28.8692 29.8186 28.921 29.7279C28.9728 29.6371 29.0001 29.5345 29 29.43V16.5C29 15.1211 28.7284 13.7557 28.2007 12.4818C27.6731 11.2079 26.8996 10.0504 25.9246 9.07538C24.9496 8.10036 23.7921 7.32694 22.5182 6.79926C21.2443 6.27159 19.8789 6 18.5 6V6ZM5 16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L25.238 31.7925C24.7869 31.5418 24.2787 31.4118 23.7626 31.415C23.2466 31.4181 22.74 31.5544 22.292 31.8105L21.4775 32.2755C20.5708 32.7938 19.5444 33.0664 18.5 33.0664C17.4556 33.0664 16.4292 32.7938 15.5225 32.2755L14.708 31.8105C14.26 31.5544 13.7534 31.4181 13.2374 31.415C12.7213 31.4118 12.2131 31.5418 11.762 31.7925L10.349 32.5785C7.949 33.9105 5 32.175 5 29.43V16.5ZM16.25 15.75C16.25 16.3467 16.0129 16.919 15.591 17.341C15.169 17.7629 14.5967 18 14 18C13.4033 18 12.831 17.7629 12.409 17.341C11.9871 16.919 11.75 16.3467 11.75 15.75C11.75 15.1533 11.9871 14.581 12.409 14.159C12.831 13.7371 13.4033 13.5 14 13.5C14.5967 13.5 15.169 13.7371 15.591 14.159C16.0129 14.581 16.25 15.1533 16.25 15.75ZM23 18C23.5967 18 24.169 17.7629 24.591 17.341C25.0129 16.919 25.25 16.3467 25.25 15.75C25.25 15.1533 25.0129 14.581 24.591 14.159C24.169 13.7371 23.5967 13.5 23 13.5C22.4033 13.5 21.831 13.7371 21.409 14.159C20.9871 14.581 20.75 15.1533 20.75 15.75C20.75 16.3467 20.9871 16.919 21.409 17.341C21.831 17.7629 22.4033 18 23 18Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2532">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}

                    <span style={{ color: isActive ? "#E0C895" : "white" }}>
                      TIME TABLE
                    </span>
                  </>
                );
              }}
              onClick={() => setOpen(!isOpen)}
            />
            <ListLink
              to={"/event"}
              children={({ isActive }) => {
                return (
                  <>
                    {isActive ? (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2528)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L26.108 32.286C24.608 31.518 23.432 31.266 21.7745 32.115L21.4775 32.277C20.6226 32.7654 19.6607 33.0359 18.6766 33.0646C17.6925 33.0934 16.7164 32.8796 15.8345 32.442L15.5225 32.277C13.607 31.182 12.2735 31.509 10.3475 32.577C7.9475 33.912 5 32.1765 5 29.4315V16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3V3ZM13.25 13.5C12.6533 13.5 12.081 13.7371 11.659 14.159C11.2371 14.581 11 15.1533 11 15.75C11 16.3467 11.2371 16.919 11.659 17.341C12.081 17.7629 12.6533 18 13.25 18C13.8467 18 14.419 17.7629 14.841 17.341C15.2629 16.919 15.5 16.3467 15.5 15.75C15.5 15.1533 15.2629 14.581 14.841 14.159C14.419 13.7371 13.8467 13.5 13.25 13.5ZM23.75 13.5C23.1533 13.5 22.581 13.7371 22.159 14.159C21.7371 14.581 21.5 15.1533 21.5 15.75C21.5 16.3467 21.7371 16.919 22.159 17.341C22.581 17.7629 23.1533 18 23.75 18C24.3467 18 24.919 17.7629 25.341 17.341C25.7629 16.919 26 16.3467 26 15.75C26 15.1533 25.7629 14.581 25.341 14.159C24.919 13.7371 24.3467 13.5 23.75 13.5V13.5Z"
                            fill="#E0C895"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2528">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2532)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 6C15.7152 6 13.0445 7.10625 11.0754 9.07538C9.10625 11.0445 8 13.7152 8 16.5V29.43C7.99995 29.5345 8.02718 29.6371 8.07899 29.7279C8.1308 29.8186 8.2054 29.8942 8.29541 29.9472C8.38542 30.0003 8.48771 30.0289 8.59217 30.0302C8.69663 30.0316 8.79964 30.0057 8.891 29.955L10.3055 29.1705C11.2074 28.6692 12.2234 28.4091 13.2553 28.4151C14.2871 28.4212 15.3 28.6932 16.196 29.205L17.012 29.6715C17.4652 29.9304 17.9781 30.0665 18.5 30.0665C19.0219 30.0665 19.5348 29.9304 19.988 29.6715L20.804 29.2065C21.6999 28.6945 22.7127 28.4222 23.7445 28.4159C24.7764 28.4096 25.7924 28.6695 26.6945 29.1705L28.109 29.955C28.2004 30.0057 28.3034 30.0316 28.4078 30.0302C28.5123 30.0289 28.6146 30.0003 28.7046 29.9472C28.7946 29.8942 28.8692 29.8186 28.921 29.7279C28.9728 29.6371 29.0001 29.5345 29 29.43V16.5C29 15.1211 28.7284 13.7557 28.2007 12.4818C27.6731 11.2079 26.8996 10.0504 25.9246 9.07538C24.9496 8.10036 23.7921 7.32694 22.5182 6.79926C21.2443 6.27159 19.8789 6 18.5 6V6ZM5 16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L25.238 31.7925C24.7869 31.5418 24.2787 31.4118 23.7626 31.415C23.2466 31.4181 22.74 31.5544 22.292 31.8105L21.4775 32.2755C20.5708 32.7938 19.5444 33.0664 18.5 33.0664C17.4556 33.0664 16.4292 32.7938 15.5225 32.2755L14.708 31.8105C14.26 31.5544 13.7534 31.4181 13.2374 31.415C12.7213 31.4118 12.2131 31.5418 11.762 31.7925L10.349 32.5785C7.949 33.9105 5 32.175 5 29.43V16.5ZM16.25 15.75C16.25 16.3467 16.0129 16.919 15.591 17.341C15.169 17.7629 14.5967 18 14 18C13.4033 18 12.831 17.7629 12.409 17.341C11.9871 16.919 11.75 16.3467 11.75 15.75C11.75 15.1533 11.9871 14.581 12.409 14.159C12.831 13.7371 13.4033 13.5 14 13.5C14.5967 13.5 15.169 13.7371 15.591 14.159C16.0129 14.581 16.25 15.1533 16.25 15.75ZM23 18C23.5967 18 24.169 17.7629 24.591 17.341C25.0129 16.919 25.25 16.3467 25.25 15.75C25.25 15.1533 25.0129 14.581 24.591 14.159C24.169 13.7371 23.5967 13.5 23 13.5C22.4033 13.5 21.831 13.7371 21.409 14.159C20.9871 14.581 20.75 15.1533 20.75 15.75C20.75 16.3467 20.9871 16.919 21.409 17.341C21.831 17.7629 22.4033 18 23 18Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2532">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}

                    <span style={{ color: isActive ? "#E0C895" : "white" }}>
                      BOOTH &#38; EVENT
                    </span>
                  </>
                );
              }}
              onClick={() => setOpen(!isOpen)}
            />
            <ListLink
              to={"/somtalk"}
              children={({ isActive }) => {
                return (
                  <>
                    {isActive ? (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2528)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L26.108 32.286C24.608 31.518 23.432 31.266 21.7745 32.115L21.4775 32.277C20.6226 32.7654 19.6607 33.0359 18.6766 33.0646C17.6925 33.0934 16.7164 32.8796 15.8345 32.442L15.5225 32.277C13.607 31.182 12.2735 31.509 10.3475 32.577C7.9475 33.912 5 32.1765 5 29.4315V16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3V3ZM13.25 13.5C12.6533 13.5 12.081 13.7371 11.659 14.159C11.2371 14.581 11 15.1533 11 15.75C11 16.3467 11.2371 16.919 11.659 17.341C12.081 17.7629 12.6533 18 13.25 18C13.8467 18 14.419 17.7629 14.841 17.341C15.2629 16.919 15.5 16.3467 15.5 15.75C15.5 15.1533 15.2629 14.581 14.841 14.159C14.419 13.7371 13.8467 13.5 13.25 13.5ZM23.75 13.5C23.1533 13.5 22.581 13.7371 22.159 14.159C21.7371 14.581 21.5 15.1533 21.5 15.75C21.5 16.3467 21.7371 16.919 22.159 17.341C22.581 17.7629 23.1533 18 23.75 18C24.3467 18 24.919 17.7629 25.341 17.341C25.7629 16.919 26 16.3467 26 15.75C26 15.1533 25.7629 14.581 25.341 14.159C24.919 13.7371 24.3467 13.5 23.75 13.5V13.5Z"
                            fill="#E0C895"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2528">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_529_2532)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.5 6C15.7152 6 13.0445 7.10625 11.0754 9.07538C9.10625 11.0445 8 13.7152 8 16.5V29.43C7.99995 29.5345 8.02718 29.6371 8.07899 29.7279C8.1308 29.8186 8.2054 29.8942 8.29541 29.9472C8.38542 30.0003 8.48771 30.0289 8.59217 30.0302C8.69663 30.0316 8.79964 30.0057 8.891 29.955L10.3055 29.1705C11.2074 28.6692 12.2234 28.4091 13.2553 28.4151C14.2871 28.4212 15.3 28.6932 16.196 29.205L17.012 29.6715C17.4652 29.9304 17.9781 30.0665 18.5 30.0665C19.0219 30.0665 19.5348 29.9304 19.988 29.6715L20.804 29.2065C21.6999 28.6945 22.7127 28.4222 23.7445 28.4159C24.7764 28.4096 25.7924 28.6695 26.6945 29.1705L28.109 29.955C28.2004 30.0057 28.3034 30.0316 28.4078 30.0302C28.5123 30.0289 28.6146 30.0003 28.7046 29.9472C28.7946 29.8942 28.8692 29.8186 28.921 29.7279C28.9728 29.6371 29.0001 29.5345 29 29.43V16.5C29 15.1211 28.7284 13.7557 28.2007 12.4818C27.6731 11.2079 26.8996 10.0504 25.9246 9.07538C24.9496 8.10036 23.7921 7.32694 22.5182 6.79926C21.2443 6.27159 19.8789 6 18.5 6V6ZM5 16.5C5 12.9196 6.42232 9.4858 8.95406 6.95406C11.4858 4.42232 14.9196 3 18.5 3C22.0804 3 25.5142 4.42232 28.0459 6.95406C30.5777 9.4858 32 12.9196 32 16.5V29.43C32 32.175 29.051 33.9105 26.651 32.5785L25.238 31.7925C24.7869 31.5418 24.2787 31.4118 23.7626 31.415C23.2466 31.4181 22.74 31.5544 22.292 31.8105L21.4775 32.2755C20.5708 32.7938 19.5444 33.0664 18.5 33.0664C17.4556 33.0664 16.4292 32.7938 15.5225 32.2755L14.708 31.8105C14.26 31.5544 13.7534 31.4181 13.2374 31.415C12.7213 31.4118 12.2131 31.5418 11.762 31.7925L10.349 32.5785C7.949 33.9105 5 32.175 5 29.43V16.5ZM16.25 15.75C16.25 16.3467 16.0129 16.919 15.591 17.341C15.169 17.7629 14.5967 18 14 18C13.4033 18 12.831 17.7629 12.409 17.341C11.9871 16.919 11.75 16.3467 11.75 15.75C11.75 15.1533 11.9871 14.581 12.409 14.159C12.831 13.7371 13.4033 13.5 14 13.5C14.5967 13.5 15.169 13.7371 15.591 14.159C16.0129 14.581 16.25 15.1533 16.25 15.75ZM23 18C23.5967 18 24.169 17.7629 24.591 17.341C25.0129 16.919 25.25 16.3467 25.25 15.75C25.25 15.1533 25.0129 14.581 24.591 14.159C24.169 13.7371 23.5967 13.5 23 13.5C22.4033 13.5 21.831 13.7371 21.409 14.159C20.9871 14.581 20.75 15.1533 20.75 15.75C20.75 16.3467 20.9871 16.919 21.409 17.341C21.831 17.7629 22.4033 18 23 18Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_529_2532">
                            <rect
                              width="36"
                              height="36"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}

                    <span style={{ color: isActive ? "#E0C895" : "white" }}>
                      SOM TALK
                    </span>
                  </>
                );
              }}
              onClick={() => setOpen(!isOpen)}
            />
          </ListDiv>
          <GhostSomImg src="img/ghostsom.png" />
        </ul>
      </NavMenu>
    </>
  );
};

export default Header;
