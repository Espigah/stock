--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.24
-- Dumped by pg_dump version 9.6.15

-- Started on 2019-10-18 01:25:31 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 11899)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2044 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 173 (class 1259 OID 34365)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 174 (class 1259 OID 34367)
-- Name: product; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product (
    id_product integer NOT NULL,
    bar_code integer,
    category character varying(255),
    description character varying(255),
    name character varying(255),
    quantity integer
);


--
-- TOC entry 2045 (class 0 OID 0)
-- Dependencies: 173
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.hibernate_sequence', 2, true);


--
-- TOC entry 2036 (class 0 OID 34367)
-- Dependencies: 174
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.product (id_product, bar_code, category, description, name, quantity) FROM stdin;
2	22	B	test2	p2	2
3	33	C	test3	p3	3
1	11	A	test1	p1	1
\.


--
-- TOC entry 1925 (class 2606 OID 34374)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id_product);


-- Completed on 2019-10-18 01:25:32 -03

--
-- PostgreSQL database dump complete
--
