import { Box, Divider, Stack, Typography } from "@mui/joy";
import styled from "@emotion/styled";
import AnimationBox from "../../Animations";
import BenifitImg from "../../../assets/imgs/benifit.png";
import DiversificationImg from "../../../assets/imgs/diversification.png";
import Transparent_lImg from "../../../assets/imgs/transparent_l.png";
import Transparent_rImg from "../../../assets/imgs/transparent_r.png";
import EllipseImg from "../../../assets/imgs/Ellipse.png";
import EllipseBottomImg from "../../../assets/imgs/EllipseBottom.png";

const Benifit: React.FC = () => {
  return (
    <Box
      id="Benefits"
      sx={{
        bgcolor: "#181716",
        p: { xs: "88px 30px", sm: "88px 106px" },
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "300px", sm: "300px", md: "500px" },
          height: { xs: "300px", sm: "300px", md: "500px" },
          backgroundImage: `url(${EllipseImg})`,
          backgroundSize: "100% 100%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: { xs: "300px", sm: "300px", md: "500px" },
          height: { xs: "300px", sm: "300px", md: "500px" },
          backgroundImage: `url(${EllipseBottomImg})`,
          backgroundSize: "100% 100%",
        }}
      />
      <AnimationBox option={1}>
        <Stack
          sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
        >
          <AnimationBox
            option={0}
            styles={{
              position: "relative",
              justifyContent: "space-around",
              flex: "1 1",
            }}
          >
            <Typography
              sx={{
                display: "inline",
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "30px", md: "62px" },
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                mr: "15px",
              }}
            >
              Benefits
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "30px", md: "62px" },
                color: "#fff",
                textWrap: "nowrap",
              }}
            >
              with SolGold
            </Typography>
          </AnimationBox>

          <Typography
            sx={{
              fontSize: "19px",
              fontWeight: "400",
              color: "#fff",
              maxWidth: "664px",
              textAlign: "center",
            }}
          >
            Stagflation presents a unique challenge to investors, blending the
            difficulties of high inflation with the stagnation of economic
            growth.
          </Typography>
        </Stack>
      </AnimationBox>
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "none", sm: "center", md: "none" },
            mt: "80px",
            gap: "100px",
          }}
        >
          <AnimationBox
            option={4}
            styles={{
              bgcolor: "#212121",
              borderRadius: "10px",
              p: "25px",
              flex: "1 1",
            }}
          >
            <Typography
              sx={{
                display: "inline",
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "20px", md: "26px" },
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                mr: "15px",
              }}
            >
              Inflation Hedge
            </Typography>
            <Typography
              sx={{
                ml: "12px",
                fontSize: "15px",
                letterSpacing: "1px",
                lineHeight: "180%",
                color: "#fff",
                fontWeight: 300,
                mt: "6px",
              }}
            >
              SolGold provides a robust hedge against inflation by being backed
              by physical gold. Gold has historically maintained its value and
              often appreciates when real returns on other assets decline due to
              inflation. This intrinsic quality of gold helps SolGold maintain
              purchasing power even in volatile economic climates, safeguarding
              your investments
            </Typography>
          </AnimationBox>
          <AnimationBox
            option={4}
            styles={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "1 1",
              p: "25px",
            }}
          >
            <img src={BenifitImg} alt="" style={{ width: "100%" }} />
          </AnimationBox>

          <AnimationBox
            option={4}
            styles={{
              bgcolor: "#212121",
              borderRadius: "10px",
              p: "25px",
              flex: "1 1",
              position: "relative",
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <img
                src={DiversificationImg}
                alt=""
                style={{ position: "absolute", top: -70, left: -70 }}
              />
            </Box>
            <Typography
              sx={{
                display: "inline",
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "20px", md: "26px" },
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                mr: "15px",
              }}
            >
              Inflation Hedge
            </Typography>
            <Typography
              sx={{
                ml: "12px",
                fontSize: "15px",
                letterSpacing: "1px",
                lineHeight: "180%",
                color: "#fff",
                fontWeight: 300,
                mt: "6px",
              }}
            >
              SolGold provides a robust hedge against inflation by being backed
              by physical gold. Gold has historically maintained its value and
              often appreciates when real returns on other assets decline due to
              inflation. This intrinsic quality of gold helps SolGold maintain
              purchasing power even in volatile economic climates, safeguarding
              your investments
            </Typography>
          </AnimationBox>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "space-around",
            borderBottom: "1px solid #003047",
          }}
        >
          <Box sx={{ position: "relative", mb: "-12px" }}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                borderRadius: "10px",
                ml: "3px",
              }}
            />
            <Divider
              orientation="vertical"
              sx={{ height: "55px", bgcolor: "#003047", ml: "5px" }}
            />
            <Box
              sx={{
                width: "17px",
                height: "17px",
                background: "#003047",
                borderRadius: "100%",
                ml: "-5px",
                mr: "-10px",
                p: "3px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  background: "transparent",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              mb: "-12px",
              transform: "translateY(75px)",
            }}
          >
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                borderRadius: "10px",
                ml: "3px",
              }}
            />
            <Divider
              orientation="vertical"
              sx={{ height: "55px", bgcolor: "#003047", ml: "5px" }}
            />

            <Box
              sx={{
                width: "17px",
                height: "17px",
                background: "#003047",
                borderRadius: "100%",
                ml: "-5px",
                mr: "-10px",
                p: "3px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ position: "relative", mb: "-12px" }}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                borderRadius: "10px",
                ml: "3px",
              }}
            />
            <Divider
              orientation="vertical"
              sx={{ height: "55px", bgcolor: "#003047", ml: "5px" }}
            />
            <Box
              sx={{
                width: "17px",
                height: "17px",
                background: "#003047",
                borderRadius: "100%",
                ml: "-5px",
                mr: "-10px",
                p: "3px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "none", sm: "center", md: "none" },
            mt: "80px",
            gap: "100px",
          }}
        >
          <AnimationBox
            option={4}
            styles={{
              flex: "1 1",
              p: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Transparent_lImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "300px",
              }}
            />
          </AnimationBox>
          <AnimationBox
            option={4}
            styles={{
              bgcolor: "#212121",
              borderRadius: "10px",
              p: "25px",
              flex: "1 1",
            }}
          >
            <Typography
              sx={{
                display: "inline",
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "20px", md: "26px" },
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                mr: "15px",
              }}
            >
              Transparency
            </Typography>
            <Typography
              sx={{
                ml: "12px",
                fontSize: "15px",
                letterSpacing: "1px",
                lineHeight: "180%",
                color: "#fff",
                fontWeight: 300,
                mt: "6px",
              }}
            >
              SolGold commits to high standards of transparency and security.
              Each SolGold token is backed by a verifiable quantity of physical
              gold, held in secure storage. Regular audits and public reporting
              ensure that every token issued is fully backed, providing
              investors with peace of mind and enhancing trust in SolGold as a
              reliable digital asset.
            </Typography>
          </AnimationBox>

          <AnimationBox
            option={4}
            styles={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "1 1",
              p: "25px",
            }}
          >
            <img
              src={Transparent_rImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </AnimationBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Benifit;
