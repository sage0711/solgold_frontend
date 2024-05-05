import { Stack, Box, Typography } from "@mui/joy";
import TwitterImg from "../../../assets/imgs/twitter.png";
import DiscordImg from "../../../assets/imgs/discord.png";
import TelegramImg from "../../../assets/imgs/telegram.png";
const Footer: React.FC = () => {
  return (
    <Stack
      sx={{
        bgcolor: "#181716",
        borderTop: "1px solid #fff",
        pt: "26px",
        pb: " 57px",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "22px", fontWeight: "600", color: "#fff" }}>
        SolGold © 2024 | All Rights Reserved
      </Typography>
      <Box sx={{ display: "flex", mt: "27px", gap: "32px" }}>
        <img src={TwitterImg} alt="" />
        <img src={DiscordImg} alt="" />
        <img src={TelegramImg} alt="" />
      </Box>
    </Stack>
  );
};

export default Footer;
