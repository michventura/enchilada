import {
  Face,
  AddAPhoto,
  FileOpen,
  Save,
  Undo,
  Redo,
} from "@mui/icons-material";
import "./index.css";

const Toolbar: React.FC = () => (
  <div className="toolbar">
    <div>
      <Face /> <span>enchilada</span>
    </div>
    <div>
      <AddAPhoto />
      <FileOpen />
      <Save />
      <Undo />
      <Redo />
    </div>
  </div>
);

const Settings: React.FC = () => (
  <div className="settings">
    <div className="settings-sheet">
      <h2>Filters</h2>
    </div>
    <div className="settings-display">
      <img src="https://picsum.photos/600/400" alt="random" />
    </div>
  </div>
);

export const Workspace: React.FC = () => {
  return (
    <div className="workspace">
      <Toolbar />
      <Settings />
    </div>
  );
};
