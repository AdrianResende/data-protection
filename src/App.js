import './App.css';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import LockIcon from '@mui/icons-material/Lock';
import DescriptionIcon from '@mui/icons-material/Description';
import { CardActionArea } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 10,
  boxShadow: 24,
  borderRadius: '10px',
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#382fac',
          padding: '10px',
        }}
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          <Link
            href="/"
            underline="none"
            sx={{
              marginRight: '20px',
              color: 'white',
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            <LockIcon sx={{ mr: 1 }} />
            Guia de Proteção
          </Link>
          <Link
            href="/regulamentacoes"
            underline="none"
            sx={{
              marginRight: '20px',
              color: 'white',
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            <DescriptionIcon sx={{ mr: 1 }} />
            Regulamentações
          </Link>
          <Link
            href="/blog"
            underline="none"
            sx={{
              marginRight: '20px',
              color: 'white',
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            <BookIcon sx={{ mr: 1 }} />
            Blog
          </Link>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        sx={{
          mb: 10,
        }}
      >
        <Card
          maxWidth="lg"
          sx={{
            borderRadius: '10px',
            boxShadow: 10,
            marginTop: '50px',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            image="https://brasilcloud.com.br/wp-content/uploads/2022/11/seguranca-de-dados-scaled-1.jpg"
          />
          <Typography
            variant="h2"
            component="div"
            gutterBottom
            align="center"
            sx={{
              marginTop: '20px',
              marginBottom: '0px',
            }}
          >
            Proteção de Dados em Lojas Virtuais
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            gutterBottom
            align="center"
            sx={{
              marginTop: '0px',
              padding: '20px',
            }}
          >
            A proteção de dados no e-commerce é fundamental devido à crescente
            digitalização das transações comerciais e ao volume significativo de
            informações sensíveis que são trocadas online. A segurança dos dados
            pessoais e financeiros dos clientes é essencial para garantir a
            confiança e a fidelidade dos consumidores. Brechas na proteção de
            dados podem resultar em roubo de identidade , fraude financeira e
            danos à reputação das empresas. Além disso, conformidade com
            regulamentos de proteção de dados, como o GDPR na Europa e a LGPD no
            Brasil, é obrigatória para evitar penalidades legais. Em resumo, a
            proteção de dados no e-commerce é crucial para a segurança do
            consumidor, a integridade das transações e a sustentabilidade do
            negócio.
          </Typography>
        </Card>
      </Container>
      <Card
        sx={{
          m: 1,
          color: 'white',
          fontSize: '20px',
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
          marginX: 50,
          borderRadius: '10px',
        }}
      >
        <Button onClick={handleOpen}>
          <Stack spacing={2} alignItems="center">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="black"
            >
              O que é a proteção de dados e por que é crucial para lojas
              virtuais?
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              saiba mais
            </Typography>
          </Stack>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              O que é a proteção de dados e por que é crucial para lojas
              virtuais?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              A proteção de dados é o processo de salvaguardar informações
              pessoais e financeiras contra acesso não autorizado, uso indevido
              ou divulgação. Em lojas virtuais, a proteção de dados é essencial
              para garantir a segurança dos clientes e a integridade das
              transações. Além disso, a proteção de dados é uma exigência legal
              em muitos países, com regulamentos rigorosos que impõem
              penalidades severas para violações. Portanto, a proteção de dados
              é crucial para a reputação, a confiança e a sustentabilidade das
              lojas virtuais.
            </Typography>
          </Box>
        </Modal>
      </Card>

      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Paper elevation={5}>
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            align="center"
            sx={{
              marginBottom: 5,
              padding: '20px',
              boxShadow: 10,
              bgcolor: '#382fac',
              color: 'white',
            }}
          >
            Principais Práticas
          </Typography>
        </Paper>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://doc9.com.br/wp-content/uploads/2022/06/Criptografia-de-dados-2.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Criptografia de Dados
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A criptografia transforma dados legíveis em um formato
                    codificado, acessível apenas a quem possui a chave de
                    decriptação. Isso protege informações sensíveis contra
                    acessos não autorizados, garantindo a confidencialidade e
                    integridade dos dados tanto em trânsito quanto em repouso.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i0.wp.com/blog.ingrammicro.com.br/wp-content/uploads/2021/07/AdobeStock_322043678.jpg?resize=4473%2C3354&ssl=1"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Autenticação Multifator (MFA)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A Autenticação Multifator (MFA) requer que os usuários
                    forneçam duas ou mais formas de verificação antes de
                    acessarem um sistema. Isso pode incluir algo que o usuário
                    sabe (senha), algo que o usuário possui (smartphone para
                    receber um código), e algo que o usuário é (impressão
                    digital). MFA reduz o risco de acesso não autorizado, mesmo
                    que uma das credenciais seja comprometida.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://solutiresponde.com.br/wp-content/uploads/2019/01/270286-ssl-ou-tls-entenda-a-diferenca-entre-os-protocolos.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Uso de Certificados SSL/TLS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Os certificados SSL/TLS (Secure Sockets Layer/Transport
                    Layer Security) são usados para criptografar a comunicação
                    entre o navegador do usuário e o servidor. Isso garante que
                    os dados transmitidos não possam ser interceptados ou
                    alterados por terceiros, proporcionando segurança para
                    transações online e comunicação privada.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.infosec.com.br/wp-content/uploads/2016/11/Poli%CC%81ticas-de-Senhas.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Políticas de Senhas Seguras
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Implementar políticas de senhas seguras envolve criar
                    diretrizes que garantem a criação de senhas fortes e
                    difíceis de adivinhar. Isso inclui exigir um mínimo de
                    caracteres, combinação de letras maiúsculas, minúsculas,
                    números e símbolos, além de incentivar ou forçar a troca
                    regular de senhas. Essas políticas ajudam a proteger contas
                    contra acessos não autorizados.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.valuehost.com.br/blog/wp-content/uploads/2018/09/238603-quando-recorrer-a-recuperacao-de-dados-e-como-fazela.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Backup e Recuperação de Dados
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Realizar backups regulares dos dados e ter um plano de
                    recuperação é crucial para proteger contra perda de dados
                    devido a falhas de hardware, ataques cibernéticos ou
                    desastres naturais. Os backups devem ser armazenados de
                    forma segura, preferencialmente em locais distintos (nuvem e
                    local), e testados periodicamente para garantir que os dados
                    possam ser restaurados quando necessário.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Toolbar
        position="static"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#382fac',
          padding: '10px',
          height: '80px',
          marginTop: '50px',
        }}
      >
        <Typography color={'white'}>
          &copy; 2022 Guia de Proteção - Todos os direitos reservados
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default App;
