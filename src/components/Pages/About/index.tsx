import { Box, Stack, Typography } from "@mui/joy";

import AnimationBox from "../../Animations";
import ImpactImg from "../../../assets/imgs/impact.png";
import AboutImg from "../../../assets/imgs/about.png";
import EllipseImg from "../../../assets/imgs/Ellipse.png";
import EllipseBottomImg from "../../../assets/imgs/EllipseBottom.png";

const About: React.FC = () => {
  return (
    <Stack
      id="About"
      sx={{
        bgcolor: "#212121",
        p: "64px 80px",
        position: "relative",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "500px",
          height: "500px",
          backgroundImage: `url(${EllipseImg})`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "500px",
          height: "500px",
          backgroundImage: `url(${EllipseBottomImg})`,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: "20px",
        }}
      >
        <AnimationBox option={3}>
          <Box
            sx={{
              maxWidth: "531px",
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
              About
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "30px", md: "62px" },
                color: "#fff",
                mr: "15px",
              }}
            >
              SolGold and Crypto
            </Typography>
          </Box>
        </AnimationBox>
        <AnimationBox option={3}>
          <Box sx={{ maxWidth: "640px" }}>
            <Typography
              sx={{
                fontSize: "19px",
                fontWeight: "400",
                color: "#fff",
              }}
            >
              Stagflation presents a unique challenge to investors, blending the
              difficulties of high inflation with the stagnation of economic
              growth. Traditional investments often falter under these
              conditions, struggling with eroding returns and increased
              volatility. In contrast, gold-backed cryptocurrencies offer a
              modern solution.
            </Typography>
          </Box>
        </AnimationBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
        }}
      >
        <Stack sx={{ flex: "1 1" }}>
          <Stack sx={{ mt: "28px", gap: "77px" }}>
            <AnimationBox option={1}>
              <Box sx={{ display: "flex", gap: "27px" }}>
                <img
                  src={ImpactImg}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
                <Stack>
                  <Typography
                    sx={{ fontSize: "26px", fontWeight: "500", color: "#fff" }}
                  >
                    Impact of Stagflation
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "300",
                      color: "#fff",
                      maxWidth: "320px",
                    }}
                  >
                    Stagflation presents a unique challenge to investors,
                    blending the difficulties of high inflation with the
                  </Typography>
                </Stack>
              </Box>
            </AnimationBox>
            <AnimationBox option={1}>
              <Box sx={{ display: "flex", gap: "27px" }}>
                <img
                  src={ImpactImg}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
                <Stack>
                  <Typography
                    sx={{ fontSize: "26px", fontWeight: "500", color: "#fff" }}
                  >
                    Impact of Stagflation
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "300",
                      color: "#fff",
                      maxWidth: "320px",
                    }}
                  >
                    Stagflation presents a unique challenge to investors,
                    blending the difficulties of high inflation with the
                  </Typography>
                </Stack>
              </Box>
            </AnimationBox>
            <AnimationBox option={1}>
              <Box sx={{ display: "flex", gap: "27px" }}>
                <img
                  src={ImpactImg}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
                <Stack>
                  <Typography
                    sx={{ fontSize: "26px", fontWeight: "500", color: "#fff" }}
                  >
                    Impact of Stagflation
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "300",
                      color: "#fff",
                      maxWidth: "320px",
                    }}
                  >
                    Stagflation presents a unique challenge to investors,
                    blending the difficulties of high inflation with the
                  </Typography>
                </Stack>
              </Box>
            </AnimationBox>
          </Stack>
        </Stack>
        <AnimationBox option={0}>
          <Stack sx={{ flex: "1 1", alignItems: "end" }}>
            <img
              src={AboutImg}
              alt=""
              style={{ maxWidth: "720px", width: "100%" }}
            />
          </Stack>
        </AnimationBox>
      </Box>
    </Stack>
  );
};

export default About;
