import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import LockIcon from '@mui/icons-material/Lock';
import DescriptionIcon from '@mui/icons-material/Description';
import BookIcon from '@mui/icons-material/Book';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Regulamentacoes() {
  return (
    <div>
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
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Card
          sx={{
            maxWidth: 700,
            height: 700,
          }}
        >
          {' '}
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://blog.memorycomp.com.br/wp-content/uploads/2019/05/lgpd3-1024x536-1024x536.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Lei Geral de Proteção de Dados (LGPD) - Brasil
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018, é a
                principal legislação brasileira sobre proteção de dados
                pessoais. Algumas das suas principais disposições incluem:
                <br />
                <b> Consentimento:</b> As empresas precisam obter o
                consentimento explícito dos usuários para coletar, armazenar e
                usar seus dados pessoais. <br />
                <b>Finalidade:</b> Os dados devem ser coletados para finalidades
                específicas, explícitas e legítimas. <br />
                <b> Transparência: </b> As empresas devem informar aos usuários
                como seus dados serão utilizados. <br />
                <b>Segurança:</b> Medidas de segurança devem ser adotadas para
                proteger os dados pessoais contra acesso não autorizado, perda
                ou vazamento. <br />
                <b>Direitos dos Titulares:</b> Os usuários têm o direito de
                acessar, corrigir, excluir e portabilizar seus dados.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
}

export default Regulamentacoes;
