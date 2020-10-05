import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
  width: 100%;
  height: 68px;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 999;
`;
