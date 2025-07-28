import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
  
  * {
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }
`;

type TaskData = {
  id: string;
  title: string;
  state: "TASK_INBOX" | "TASK_SNOOZED" | "TASK_PINNED";
  updatedAt: Date;
  boardName: string;
};

type TaskProps = {
  task: TaskData;
};

// Styled Components
const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #e1e4e8;
  background: white;
  transition: background-color 0.2s ease;
  min-height: 48px;
  &:hover {
    background-color: #f6f8fa;
  }
`;

const TaskContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`;

const TaskTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #24292e;
  line-height: 1.4;
`;

const GitHubIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #24292e;
  flex-shrink: 0;
`;

const BoardName = styled.div`
  font-size: 14px;
  color: #586069;
  text-align: center;
  line-height: 1.4;
  justify-self: center;
`;

const ActionColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SnoozeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: #586069;
  line-height: 1.2;
`;

const SnoozeClockIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #586069;
  flex-shrink: 0;
`;

const ClockIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #26c6da;
  flex-shrink: 0;
  margin-left: 8px;
`;

const StarIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #26c6da;
  flex-shrink: 0;
  margin-left: 8px;
`;

export const Task = ({ task }: TaskProps) => {
  const isSnoozed = task.state === "TASK_SNOOZED";
  const isPinned = task.state === "TASK_PINNED";

  return (
    <>
      <GlobalStyle />
      <TaskContainer>
        <TaskContent>
          <TaskTitle>
            <GitHubIcon viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </GitHubIcon>
            {task.title}
          </TaskTitle>
          <BoardName>{task.boardName}</BoardName>
          <ActionColumn>
            {isSnoozed && (
              <SnoozeInfo>
                Unsnoozing in a day
                <ClockIcon viewBox="0 0 12 12">
                  <path d="M6 0C2.69 0 0 2.69 0 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10.5c-2.48 0-4.5-2.02-4.5-4.5S3.52 1.5 6 1.5s4.5 2.02 4.5 4.5S8.48 10.5 6 10.5z" />
                  <path d="M6 3v3h2.25" />
                </ClockIcon>
              </SnoozeInfo>
            )}
            {isPinned && (
              <StarIcon viewBox="0 0 16 16">
                <path d="M8 0l1.5 4.5L14 5.5L11 8.5L12 14L8 11.5L4 14L5 8.5L2 5.5L6.5 4.5L8 0z" />
              </StarIcon>
            )}
          </ActionColumn>
        </TaskContent>
      </TaskContainer>
    </>
  );
};
