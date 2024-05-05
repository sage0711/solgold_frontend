import { Stack, Box, Typography, Link } from "@mui/joy";
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
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "600",
          color: "#fff",
          textAlign: "center",
        }}
      >
        SolGold © 2024 | All Rights Reserved
      </Typography>
      <Box sx={{ display: "flex", mt: "27px", gap: "32px" }}>
        <Link underline="none" href="https://twitter.com/solgoldorg">
          <img src={TwitterImg} alt="" />
        </Link>
        <Link underline="none" href="https://solgold.org/">
          <img src={DiscordImg} alt="" />
        </Link>
        <Link underline="none" href="https://t.me/solgoldorg">
          <img src={TelegramImg} alt="" />
        </Link>
      </Box>
    </Stack>
  );
};

export default Footer;
