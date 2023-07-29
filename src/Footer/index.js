import { StyledFooter, Paragraph } from "./styled";

const Footer = ({ state }) => {
  return (
    <StyledFooter>
      <Paragraph state={state}>
        {state === "loading"
          ? "Trwa pobieranie kursów walut z platformy https://api.exchangerate.host/ "
          : state === "error"
          ? "Pobieranie nie powidło się. Sprawdź połączenie."
          : "Kursy walut pobrane z platformy https://api.exchangerate.host/"}
        ;
      </Paragraph>
    </StyledFooter>
  );
};
export default Footer;
