import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = ({ searchQuery, setSearchQuery, noteCount }) => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            JobTracker {typeof noteCount === "number" ? ` - ${noteCount}` : ""}
          </h1>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered input-sm w-full md:w-64"
            />
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Job</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;