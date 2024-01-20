import { useState, useCallback } from "react";
import DropdownMenu1 from "./DropDownMenu1";
import PortalPopup from "./PortalPopup";
import DropdownMenu from "./DropdownMenu";
import Calendar from "./Calendar";
import styled from "styled-components";

const Text18 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const PleaseCompleteThe = styled.span``;
const Savi = styled.span`
  color: var(--primary-color);
`;
const TextTxt = styled.span`
  width: 100%;
`;
const Text19 = styled.div`
  position: relative;
  font-size: var(--text-md-medium-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  display: flex;
  align-items: center;
  width: 23.38rem;
  height: 3.06rem;
  flex-shrink: 0;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Text20 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Iconadd16 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Text21 = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const ChevronDownIcon5 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
`;
const Buttondefault = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--input-small-medium-size);
  color: var(--grey-400);
`;
const TextParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameWrapper2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameWrapper1 = styled.div`
  width: 13.19rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameParent1 = styled.div`
  width: 27.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const ChevronDownIcon8 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Buttondefault4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-81xl);
  font-size: var(--input-small-medium-size);
  color: var(--grey-400);
`;
const Buttondefault5 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  height: 3rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-base);
`;
const FrameWrapper11 = styled.div`
  width: 27.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ImageIcon = styled.img`
  position: relative;
  width: 4.38rem;
  height: 2.8rem;
  object-fit: cover;
  display: none;
  z-index: 0;
`;
const DropYourFiles2 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.5rem;
  font-weight: 500;
`;
const ChevronLeftIcon2 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Link = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.5rem;
  font-weight: 600;
`;
const BorderBottom2 = styled.div`
  align-self: stretch;
  position: relative;
  background-color: var(--blue-500);
  height: 0.13rem;
  display: none;
`;
const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const LinkDefault = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: var(--blue-500);
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-8xs);
`;
const SecondaryLabel = styled.div`
  position: relative;
  font-size: var(--input-small-medium-size);
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--gray-400);
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  z-index: 1;
`;
const FigmaIcon2 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const File1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.69rem;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  box-shadow: var(--drop-shadow-2xl);
  border: 1px solid var(--gray-300);
  box-sizing: border-box;
  width: 2rem;
  height: 2.63rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const PrelineUifig = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
`;
const Label = styled.div`
  position: absolute;
  top: 2.88rem;
  left: 0rem;
  border-radius: var(--br-980xl);
  background-color: var(--blue-600);
  box-shadow: var(--drop-shadow-md);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-7xs);
`;
const DraggingPointerIcon2 = styled.img`
  position: absolute;
  top: 3.73rem;
  left: 3.22rem;
  width: 1.25rem;
  height: 1.75rem;
  object-fit: cover;
`;
const DarggingFile = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 2.63rem;
  left: 16.63rem;
  width: 5.38rem;
  height: 5.48rem;
  display: none;
  z-index: 2;
  font-size: var(--xs-regular-size);
  color: var(--white);
`;
const DragNDropFileUpload = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px dashed var(--grey-400);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-21xl);
  position: relative;
  gap: var(--gap-xl);
  color: var(--gray-800);
`;
const Ctadefault = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-5xs);
  color: var(--white);
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const KycInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--text-md-medium-size);
`;
const KycRoot = styled.div`
  position: relative;
  border-radius: var(--br-base);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--headline-medium-24-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;

const KYC = () => {
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [isDropdownMenu1Open, setDropdownMenu1Open] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isDropdownMenu2Open, setDropdownMenu2Open] = useState(false);

  const openDropdownMenu = useCallback(() => {
    setDropdownMenuOpen(true);
  }, []);

  const closeDropdownMenu = useCallback(() => {
    setDropdownMenuOpen(false);
  }, []);

  const openDropdownMenu1 = useCallback(() => {
    setDropdownMenu1Open(true);
  }, []);

  const closeDropdownMenu1 = useCallback(() => {
    setDropdownMenu1Open(false);
  }, []);

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const openDropdownMenu2 = useCallback(() => {
    setDropdownMenu2Open(true);
  }, []);

  const closeDropdownMenu2 = useCallback(() => {
    setDropdownMenu2Open(false);
  }, []);

  return (
    <>
      <KycRoot>
        <FrameParent>
          <TextWrapper>
            <Text18>Complete Your KYC Verification</Text18>
          </TextWrapper>
          <Text19>
            <TextTxt>
              <PleaseCompleteThe>{`Please complete the KYC verification process to unlock the full features and benefits of `}</PleaseCompleteThe>
              <Savi>Savi</Savi>
              <PleaseCompleteThe>.</PleaseCompleteThe>
            </TextTxt>
          </Text19>
        </FrameParent>
        <KycInner>
          <FrameWrapper>
            <FrameGroup>
              <FrameDiv>
                <FrameWrapper1>
                  <FrameWrapper2>
                    <TextParent>
                      <Text20>Gender</Text20>
                      <Buttondefault>
                        <Iconadd16 alt="" />
                        <Text21>Select your Gender</Text21>
                        <Iconadd16 alt="" />
                        <ChevronDownIcon5
                          alt=""
                          src="/chevrondown@2x.png"
                          onClick={openDropdownMenu}
                        />
                      </Buttondefault>
                    </TextParent>
                  </FrameWrapper2>
                </FrameWrapper1>
                <FrameWrapper>
                  <FrameWrapper>
                    <TextGroup>
                      <Text20>Occupation</Text20>
                      <Buttondefault>
                        <Iconadd16 alt="" />
                        <Text21>Select your Occupation</Text21>
                        <Iconadd16 alt="" />
                        <ChevronDownIcon5
                          alt=""
                          src="/chevrondown@2x.png"
                          onClick={openDropdownMenu1}
                        />
                      </Buttondefault>
                    </TextGroup>
                  </FrameWrapper>
                </FrameWrapper>
              </FrameDiv>
              <FrameParent1>
                <FrameWrapper1>
                  <FrameWrapper2>
                    <TextParent>
                      <Text20>Date of Birth</Text20>
                      <Buttondefault>
                        <Iconadd16 alt="" />
                        <Text21>Pick your D.O.B</Text21>
                        <Iconadd16 alt="" />
                        <ChevronDownIcon5
                          alt=""
                          src="/calendarlines@2x.png"
                          onClick={openCalendar}
                        />
                      </Buttondefault>
                    </TextParent>
                  </FrameWrapper2>
                </FrameWrapper1>
                <FrameWrapper1>
                  <FrameWrapper2>
                    <TextParent>
                      <Text20>Identification Type</Text20>
                      <Buttondefault>
                        <Iconadd16 alt="" />
                        <Text21>Select your type</Text21>
                        <Iconadd16 alt="" />
                        <ChevronDownIcon5
                          alt=""
                          src="/chevrondown@2x.png"
                          onClick={openDropdownMenu2}
                        />
                      </Buttondefault>
                    </TextParent>
                  </FrameWrapper2>
                </FrameWrapper1>
              </FrameParent1>
              <FrameWrapper2>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>BVN</Text20>
                    <Buttondefault4>
                      <Iconadd16 alt="" />
                      <Text21>Input your BVN</Text21>
                      <Iconadd16 alt="" />
                      <ChevronDownIcon8 alt="" />
                    </Buttondefault4>
                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper2>
              <FrameWrapper11>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Address</Text20>
                    <Buttondefault5>
                      <Iconadd16 alt="" />
                      <Iconadd16 alt="" />
                    </Buttondefault5>
                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper11>
              <FrameWrapper2>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Identification Number</Text20>
                    <Buttondefault4>
                      <Iconadd16 alt="" />
                      <Text21>Input your Identification Num</Text21>
                      <Iconadd16 alt="" />
                      <ChevronDownIcon8 alt="" />
                    </Buttondefault4>
                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper2>
              <FrameWrapper2>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Upload Identification Document</Text20>
                    <DragNDropFileUpload>
                      <ImageIcon alt="" />
                      <Content>
                        <Title>
                          <DropYourFiles2>
                            Drop your files here or
                          </DropYourFiles2>
                          <Links>
                            <LinkDefault>
                              <ChevronLeftIcon2 alt="" />
                              <Placeholder>
                                <Link>browse</Link>
                                <BorderBottom2 />
                              </Placeholder>
                              <ChevronLeftIcon2 alt="" />
                            </LinkDefault>
                          </Links>
                        </Title>
                        <SecondaryLabel>Maximum size: 50MB</SecondaryLabel>
                      </Content>
                      <DarggingFile>
                        <File1>
                          <FigmaIcon2 alt="" />
                        </File1>
                        <Label>
                          <PrelineUifig>preline-ui.fig</PrelineUifig>
                        </Label>
                        <DraggingPointerIcon2 alt="" />
                      </DarggingFile>
                    </DragNDropFileUpload>
                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper2>
              <FrameWrapper2>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Upload Proof of Address</Text20>
                    <DragNDropFileUpload>
                      <ImageIcon alt="" />
                      <Content>
                        <Title>
                          <DropYourFiles2>
                            Drop your files here or
                          </DropYourFiles2>
                          <Links>
                            <LinkDefault>
                              <ChevronLeftIcon2 alt="" />
                              <Placeholder>
                                <Link>browse</Link>
                                <BorderBottom2 />
                              </Placeholder>
                              <ChevronLeftIcon2 alt="" />
                            </LinkDefault>
                          </Links>
                        </Title>
                        <SecondaryLabel>Maximum size: 50MB</SecondaryLabel>
                      </Content>
                      <DarggingFile>
                        <File1>
                          <FigmaIcon2 alt="" />
                        </File1>
                        <Label>
                          <PrelineUifig>preline-ui.fig</PrelineUifig>
                        </Label>
                        <DraggingPointerIcon2 alt="" />
                      </DarggingFile>
                    </DragNDropFileUpload>
                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper2>
              <Ctadefault>
                <Iconadd16 alt="" />
                <Text20>Submit</Text20>
                <Iconadd16 alt="" />
              </Ctadefault>
            </FrameGroup>
          </FrameWrapper>
        </KycInner>
      </KycRoot>
      {isDropdownMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdownMenu}
        >
          <DropdownMenu1 onClose={closeDropdownMenu} />
        </PortalPopup>
      )}
      {isDropdownMenu1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdownMenu1}
        >
          <DropdownMenu onClose={closeDropdownMenu1} />
        </PortalPopup>
      )}
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar}
        >
          <Calendar onClose={closeCalendar} />
        </PortalPopup>
      )}
      {isDropdownMenu2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdownMenu2}
        >
          <DropdownMenu onClose={closeDropdownMenu2} />
        </PortalPopup>
      )}
    </>
  );
};

export default KYC;
