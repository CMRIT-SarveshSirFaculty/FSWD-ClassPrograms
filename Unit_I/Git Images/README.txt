Version Control: Getting Started with Git

1. Introduction to Version Control

Version control is a system that tracks changes to files over time, allowing multiple people to collaborate efficiently. Git is a widely used distributed version control system that enables tracking changes, branching, and merging code seamlessly.

Why Use Git?

Tracks file changes over time.

Allows multiple developers to collaborate.

Enables branching and merging for parallel development.

Provides a backup of project history.

Facilitates working with remote repositories.

2. Getting Started with Git

Installing Git

Windows: Download from git-scm.com and install.

Mac: Install via Homebrew: brew install git

Linux: Use package manager (e.g., sudo apt install git for Ubuntu).

Configuring Git

After installation, configure Git with your details:

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

To check configurations:

git config --list

3. Working with a Local Repository

Initializing a Repository

To start a new Git repository in a project folder:

git init

This creates a hidden .git directory that stores the repository history.

Checking Repository Status

git status

Shows the current status of files (tracked, untracked, modified, staged).

Adding Files to Staging Area

git add <filename>

To add all files:

git add .

Committing Changes

git commit -m "Initial commit"

Commits the staged changes with a message describing them.

Viewing Commit History

git log

Shows the commit history.

4. Branches and Merging

Creating and Switching Branches

git branch feature-branch

To switch to the new branch:

git checkout feature-branch

OR

git switch feature-branch

Merging Branches

First, switch to the branch you want to merge into (e.g., main):

git checkout main

Merge the feature branch:

git merge feature-branch

Resolving Merge Conflicts

If conflicts arise, Git will mark conflicting files. Manually edit them, then:

git add <conflicted-file>
git commit -m "Resolved merge conflict"

Deleting a Branch

git branch -d feature-branch

5. Working with Remote Repositories

Connecting to a Remote Repository

To link a local repository to a remote one (e.g., on GitHub):

git remote add origin https://github.com/your-username/repo.git

Pushing Changes to Remote Repository

git push -u origin main

Uploads local commits to the remote repository.

Pulling Changes from Remote Repository

git pull origin main

Fetches and merges changes from the remote repository.

Cloning a Repository

To create a local copy of a remote repository:

git clone https://github.com/your-username/repo.git

6. Conclusion

Git is a powerful tool for version control, enabling efficient collaboration, branching, and merging. Mastering Git commands will improve development workflows and ensure robust version management.
