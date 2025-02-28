import { useDispatch } from 'react-redux'
import { setGameSystem } from '../data/armySlice'
import { useRouter } from 'next/router';
import { AppBar, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import BackIcon from '@mui/icons-material/ArrowBackIosNew';

export default function GameSystem() {

  const dispatch = useDispatch();
  const router = useRouter();
  const isLive = window.location.host === "opr-army-forge.vercel.app";

  const selectGameSystem = (gameSystem: string) => {
    dispatch(setGameSystem(gameSystem));
    router.push("/files");
  };

  return (
    <>
      <Paper elevation={2} color="primary" square>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => router.back()}
            >
              <BackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Create a new list
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
            </IconButton>
          </Toolbar>
        </AppBar>
      </Paper>
      <div className="container">
        <div className="mx-auto p-4" style={{ maxWidth: "480px" }}>
          <h3 className="is-size-4 has-text-centered mb-4">Select Game System</h3>
          <div className="columns is-multiline is-mobile">
            {
              // For each game system
              ["gf", "gff", "aof", "aofs"].map(gameSystem => (
                <div key={gameSystem} className="column is-half">
                  <Paper>
                    <img onClick={() => isLive && gameSystem !== "gf" ? false : selectGameSystem(gameSystem)} src={`img/${gameSystem}_cover.jpg`}
                      className={"game-system-tile "+ (isLive && gameSystem !== "gf" ? "" : "interactable")}
                      style={{ borderRadius: "4px", display: "block", filter: isLive && gameSystem !== "gf" ? "grayscale(95%)" : null }} />
                  </Paper>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </>
  );
}
