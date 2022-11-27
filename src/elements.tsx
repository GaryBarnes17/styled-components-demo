import styled from "styled-components";
import { Text, Textarea } from "@soluto-private/mx-asurion-ui-react";

// Form Styles - do not edit
export const StyledForm = styled.form`
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1056px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const SectionHeader = styled(Text).attrs({ size: 3, weight: "heavy" })``;

export const StyledTextarea = styled(Textarea)`
  min-width: 500px;
`;
